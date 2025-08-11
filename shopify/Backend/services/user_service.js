const userModel = require('../model/user.model');


//here we extract al thing in from the req which is user fill in the form 
module.exports.CreateUserAccount = async ({ firstname, Phoneno, Lastname, email, password
}) => {
    if (!firstname || !Phoneno || !email || !password) {
        throw new Error('All fields are required');
    }

    const userAccount = userModel.create({
        fullname: {
            firstname,
            Lastname
        },
        Phoneno,
        email,
        password


    })

    return userAccount;


}
