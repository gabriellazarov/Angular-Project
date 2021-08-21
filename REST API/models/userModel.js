const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALTROUNDS) || 5;

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/g.test(v);
            },
            message: 'Email is invalid!'
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password must be at least 5 characters long']
    },
    planToPlay: [{
        type: ObjectId,
        ref: "Game"
    }],
    finishedGames: [{
        type: ObjectId,
        ref: "Game"
    }],

    profilePic: {
        type: String
    },
    profileSummary: {
        type: String,
        maxlength: [100, 'Summary must be no more than 100 symbols']
    },
    age: {
        type: Number
    }
});


userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                }
                this.password = hash;
                next();
            })
        })
        return;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
