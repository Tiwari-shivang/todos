const Task = require("../models/tasksModel");

const createTask = async (req, res) => {
    try{
        const task = new Task(req.body);
        await task.save().then(() => {
            res.status(200).send({message: 'Task created!'});
        })
    }catch(e){
        console.log(e);
        res.send(500).status({message: 'Not able to create task'});
    }
}

const getTaskDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ _id: id });
        res.status(200).send({
            taskDetails: task
        });
    }
    catch (e) {
        console.log(e);
    }
};

const getAllTasks = async (req, res) => {
    const filters = {createdBy: req.user.userID};
    if (req.body.createdOn){
        const startDate = new Date(req.body.createdOn)
        const endDate = new Date(req.body.createdOn)
        endDate.setHours(23,59,0);
        filters.createdOn = {$gte: startDate, $lte: endDate};
    }
    if(req.body.taskName){
        filters.taskName = {$regex: req.body.taskName, $options: 'i'}
    }
    if(req.body.isPriority){
        filters.isPriority = req.body.isPriority
    }
    if(req.body.isCompleted){
        filters.isCompleted = req.body.isCompleted
    }
    const tasks = await Task.find(filters);
    res.status(200).send({ tasks: tasks })
};

const updateTask = async (req, res) => {
    const updateVals = {};
    if(req.body.isCompleted){
        updateVals.isCompleted = req.body.isCompleted;
    }
    if(req.body.isPriority){
        updateVals.isPriority = req.body.isPriority;
    }
    Task.findOneAndUpdate({_id: req.params.id},updateVals).then(() =>{
        res.status(200).send({message: "Updated!"});
    }).catch((e) => {
        res.status(500).send({message: 'Internal server error'});
    })
}

module.exports = {
    getTaskDetails,
    getAllTasks,
    createTask,
    updateTask
}