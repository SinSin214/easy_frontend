const Task = require('../model/Task');

exports.getListTaskController = function (req, res) {
    // let userId = req.body.userId
}

exports.createTaskController = function (req, res) {
    let task = new Task(req.body);
    task.save(function (err) {
        if (err) {
            res.status(200).send('Success');
        }
        else {
            res.status(500).send('Error')
        }
    });
}

