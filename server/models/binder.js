const mongoose = require('mongoose');

const { Schema } = mongoose;


const binderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    notes: [{type: Schema.Types.ObjectId, ref: "Notes"}],
    maps: [{type: Schema.Types.ObjectId, ref: "Maps"}]
});

const Binders = mongoose.model('Binders', binderSchema);

module.exports = Binders;