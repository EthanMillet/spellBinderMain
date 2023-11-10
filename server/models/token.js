const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
    position: {
        type: String,
        required: true,
    },
    title: {
        type: String,

    },
    content: {
        type: String,

    },
    tokenImg: {
        type: String,
    },
    mapID: {type: Schema.Types.ObjectId, ref: 'Maps'}
})

const Token = mongoose.model('Tokens', tokenSchema);

module.exports = Token;