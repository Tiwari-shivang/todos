const express = require('express');
const verifyToken = require('../middleware');
const { getTaskDetails, getAllTasks, createTask, updateTask } = require('../controller/tasksController');
const taskRouter = express.Router();

taskRouter.route('/create').post(verifyToken, createTask);
taskRouter.route('/:id').get(verifyToken, getTaskDetails);
taskRouter.route('/all').post(verifyToken, getAllTasks);
taskRouter.route('/:id').put(verifyToken, updateTask)

module.exports = taskRouter;