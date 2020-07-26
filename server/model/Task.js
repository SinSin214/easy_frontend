const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const Task = new mongoose.Schema({
    userId: String,
    name: String,
    describe: String,
    importance: Number,
    date: Date
});

module.exports = mongoose.model('Task', Task)