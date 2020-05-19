let mongoose = require('mongoose')


let Task = new mongoose.Schema({
    name: String,
    describe: String,
    importance: Number,
    date: Date
});

module.exports = mongoose.model('Task', Task)