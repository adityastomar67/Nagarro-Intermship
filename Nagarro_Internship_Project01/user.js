const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    profileImage: {
        type: String,
        default: '/image/profile.jpg',
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
