const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');//for create the token 
const bcrypt = require('bcrypt');//for encrypting the password in hash format and decrypt using compare function not actually mein decrypt krta ha 

const UserSchema = mongoose.Schema({

    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, 'firstname must be atleast 3 characters long ']
        },
        Lastname: {
            type: String,
            minLength: [3, 'Lastname must be atleast 3 characters long']
        }
    },
    Phoneno: {
        type: Number,
        required: true,
        minLength: [10, 'Must contain 10 digits only']
    },
    email: {
        type: String,
        required: true,
        minLength: [5, 'Email must be atleast 5 characters ']
    },
    password: {
        type: String,
        required: true,
        select: false//for database mein direct data na jaye because we first hash the password 
    },
    socketID: {
        type: String
    }







})


//this static method to generate the hashPassword 
UserSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)//take two parameter in hash plain password and second saltRound and return krenga ek lambi  hash string (256bit)
}


//for compare encrypted password to decrypted password if same then return true else false 
UserSchema.methods.comparePassword = async function(password){

    return await bcrypt.compare(password, this.password);//takes two parameters to compare hash password to original  Password  if same then return true 

    //note this is not work in the arrow function it gives the error undefined because it does not select the document  it works only in the normal anonymous function 
}


//for genrateToken and also expires in 24h 
UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '7d' });//token generate hoga through jsonwebToken ki sign method pass this parameter (_id,Secretkey,expireskitne time mein ho) 

    return token;
}








const userModel = mongoose.model('user', UserSchema);//in database save users name se document name by default set plural value in database 


module.exports=userModel;