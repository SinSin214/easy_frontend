let mongoose = require('mongoose')


let User = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    registDate: Date
});

module.exports = mongoose.model('User', User)