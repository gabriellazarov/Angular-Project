const { Schema, model } = require('mongoose');


const schema = new Schema({
    email: { type: String, required: [true, 'Email is required!'], match: [/^.+@.+$/, 'Email is invalid!'] },
    hashedPassword: { type: String, required: [true, 'Password is required!'] }
});

module.exports = model('User', schema);