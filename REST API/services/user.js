const User = require('../models/User');


async function createUser(email, hashedPassword, gender) {

    //Adapt to project requirements

    const user = new User({
        email,
        hashedPassword,
        gender
    });

    await user.save();

    return user;
}

async function getUserByEmail(email) {
    const regex = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ email: { $regex: regex } });
    return user;
}

module.exports = {
    createUser,
    getUserByEmail
};