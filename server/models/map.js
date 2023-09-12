const mongoose = require('mongoose');
const { Schema } = mongoose;

const mapSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tokens: [{type: Schema.Types.ObjectId, ref: 'Tokens'}]
});

const Maps = mongoose.model('Maps', mapSchema);

module.exports = Maps;