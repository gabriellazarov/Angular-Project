const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: [{
        type: String,
        required: true
    }],
    imageUrl: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    scores: {
        type: Array
    }
});

module.exports = mongoose.model('Game', gameSchema);
