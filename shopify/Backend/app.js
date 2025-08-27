const dotenv = require('dotenv');
dotenv.config();//for use the .env file key 
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes')

//for parsing the body request data when we give data on server 

//for properly connection frontend and backend 
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}),
)


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send("Hello World");
})


// create user routes 
app.use('/user', userRoutes);

module.exports = app;