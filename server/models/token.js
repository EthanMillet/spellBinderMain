const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
    position: {
        type: String,
        required: true,
        unique: true
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

const Notes = mongoose.model('Notes', noteSchema);

module.exports = Clothes;