const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
    position: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    tokenImg: {
        type: String,
        required: true,
    }
})

const Token = mongoose.model('Tokens', tokenSchema);

module.exports = Token;