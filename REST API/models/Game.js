const { Schema, model } = require('mongoose');


const schema = new Schema({
    title: { type: String, required: [true, 'Title is required!'] },
    description: { type: String, required: [true, 'Description is required!'] },
    imageUrl: { type: String, required: [true, 'Image URL is required!'], match: [/^https?:\/\//, 'URL is invalid!'] }
});

module.exports = model('Game', schema);