const mongoose = require('mongoose');


//connect database to our Mongodb 
async function ConnectToDB() {

    //database connect to mongodb shopify 
    try {
        await mongoose.connect(process.env.DB_CONNECT,
        // await mongoose.connect("mongodb://127.0.0.1:27017/shopify",
            {

                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log("DataBase connected Successfully ");

    } catch (error) {
        console.log("Database connection error :", error.message)
        process.exit(1);//directly stop the server 
    }

}


module.exports = ConnectToDB;