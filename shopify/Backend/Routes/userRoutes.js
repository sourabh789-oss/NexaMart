const express = require('express')
const router = express.Router();
const { body } = require('express-validator');//check the validate data from the incoming user 
const userController = require('../controllers/user_controller');
const user_payment_controller=require('../controllers/user_payment_controller');
const middleware = require('../Middlewares/auth_middleware');


//register endpoint 
router.post('/Register', [

  body('email').isEmail().withMessage("Invalid Email"),

  body('Phoneno').isLength({ min: 10 }).withMessage('Phoneno must contan 10 digits'),

  body('fullname.firstname').isLength({ min: 3 }).withMessage("Firstname must be atleast 3 characters long")
  ,
  body('password').isLength({ min: 6 }).withMessage("Password must be atleast 6 characters")



],
  userController.registerUser
)

router.post('/login', [
  body('email').isEmail().withMessage("Invalid email"),
  body('password').isLength({ min: 6 }).withMessage("Password must contain atleast 6 charactes")
],
  userController.loginUser)


router.get('/profile', middleware.AuthUser, userController.userProfile);

router.get('/logout', userController.logoutUser);


//payment post request 

router.post("create-payment-intent",user_payment_controller.payment) 

module.exports = router;//exports this our multiple routes by using router of express.Router 

