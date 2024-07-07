const express = require('express');
const { createTask, getAllTasks, getTaskDetails } = require('../controller/tasksController');
const taskRouter = express.Router();

taskRouter.post('/create', createTask);
taskRouter.get('/:id', getAllTasks);
taskRouter.get('/details/:id', getTaskDetails);

module.exports = taskRouter;