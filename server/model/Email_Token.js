let mongoose = require('mongoose');

let emailToken = new mongoose.Schema({
    _id: String,
    token: String,
    createdAt: { type: Date, default: Date.now, expires: 120 }
});

module.exports = mongoose.model('EmailToken', emailToken)