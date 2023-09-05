const mongoose = require('mongoose');

const { Schema } = mongoose;


const binderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    docs: [{type: Schema.Types.ObjectId, ref: "Docs"}],
    notes: [{type: Schema.Types.ObjectId, ref: "Notes"}],
    maps: [{type: Schema.Types.ObjectId, ref: "Maps"}]
});

const Binders = mongoose.model('Binders', binderSchema);

module.exports = Binders;