const mongoose = require('mongoose');


const blackListTokenSchema = new mongoose.Schema({

    token: {
        type: String,
        unique: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 604800
    }





});


const TokenModel = mongoose.model('BlacklistToken', blackListTokenSchema);

module.exports = TokenModel;