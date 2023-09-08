const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const Notes = mongoose.model('Notes', noteSchema);

module.exports = Notes;