let mongoose = require('mongoose');

let User = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    registDate: Date,
    isActive: Boolean
});

module.exports = mongoose.model('User', User)