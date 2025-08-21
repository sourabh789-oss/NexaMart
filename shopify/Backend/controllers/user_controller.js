
// In this file  basically we work on create the user account  login account ,profile view 
const userModel = require('../model/user.model');
const userService = require('../services/user_service');
const { validationResult } = require('express-validator');//for automatically detect when something is wrong in  my code then it automatic detect the error and perform the action on user data 
const blackListTokenModel = require('../model/Blacklist_tokenModel');
const axios = require('axios');

module.exports.registerUser = async (req, res, next) => {

    //check first error in the user request 
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    //extract this value from the user data body 
    const { fullname, Phoneno, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });//only email will be unique if user have multiple email with same phone no then they can use it 
    if (isUserAlreadyExist) {//means this user is found already 

        return res.status(400).json({ message: 'User already exists' });

    }


    //hash the password 
    const hashPassword = await userModel.hashPassword(password)

    const user = await userService.CreateUserAccount({
        firstname: fullname.firstname,
        Lastname: fullname.Lastname,
        Phoneno: Phoneno,
        email,
        password: hashPassword//when create the user Account stored password in encrypted form in our database 

    })

    //now create the token 
    const token = user.generateAuthToken();

    return res.status(201).json({ token, user });//after successfully create the account it return response token and user 

}


module.exports.loginUser = async (req, res, next) => {
    //step1 check any error in input data 
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //step2:now extract the data and verify email and password stored in database or not using findOne query and compare encrypted password with plain password 
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');//check email and password both are present 
    //   console.log(user);
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    //step3:genrate the token and store in the cookies and return the response cookie and user 

    const token = await user.generateAuthToken();

    res.cookie('token', token);

    //now send the message on that  User Mobile No 

//      try{
//     await axios.post(process.env.FAST2_API_URL, {

//         route: "q",
//         message: "You have successfully Logged in 🚀",
//         language: "english",
//         numbers: user.Phoneno,


//     }, {
//         headers: {
//             authorization: process.env.FAST2_SMS_API_KEY,
//             "Content-Type": "application/json"


//         }




//     })
// }catch(error){
//      if(error.response){
//          console.log("Fast2 SMS error",error.response.data);
//      }
//      else{
//   console.log("Axios error:",error.message);
//      }
     
// }




    res.status(200).json({ token, user })


}


module.exports.userProfile = (req, res, next) => {
    return res.status(200).json(req.user);//here user is actually user data object from database 
}


module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(400).json("Token not found")
    }

    await blackListTokenModel.create({ token });//now create the token in blackList token model database 

    res.clearCookie(token);

    return res.status(200).json({ message: "User Logged out successfully" });



}




