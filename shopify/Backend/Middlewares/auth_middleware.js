const blackListTokenModel = require('../model/Blacklist_tokenModel');
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



module.exports.AuthUser = async (req, res, next) => {

   
   const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

   //if token is not found in cookies or headers server ke
   if (!token) {
      return res.status(401).json({ message: "Unauthorized user" });
   }

   //now check if token is found already in our blackListTokem model ke database mein 
   const isBlackListed = await blackListTokenModel.findOne({ "token": token });

   //if already present that token means user is unauthorised 
   if (isBlackListed) {
      return res.status(401).json({ message: "Unauthorised user" });
   }


   //now verify the token by using jwt_secret key which was used to create this token to verify 
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
   // console.log(decoded);
      const user = await userModel.findById(decoded._id);//when we use so make sure in your schema .sign work with only simple function with this pointer but in arrow function this pointer not work so not use arrow function 

      // console.log(user);
      // console.log("running");
      req.user = user;

      next();//call the next middleware 

   } catch (error) {
      return res.status(401).json({ message: "Unauthorised User" })

   }









}