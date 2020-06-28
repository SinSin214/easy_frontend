const express = require('express');
const router = express.Router();
const task = require('../controllers/task')

router.post('/get-list-task', task.getListTaskController);
router.post('/create-task', task.createTaskController);

module.exports = router;