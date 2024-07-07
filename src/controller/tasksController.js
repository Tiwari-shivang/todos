const Task = require("../models/tasksModel")

const createTask = async (req, res) => {
    const task = new Task(req.body);
    try{
        await task.save().then(() => {
            res.status(200).send({
                message: 'Task created !'
            });
        }).catch((e) => console.log(e))
    }catch(e){
        console.log(e);
    }
};

const getAllTasks = async (req, res) => {
    const {id} = req.params;
    const allTasks = await Task.find({createdBy :id});
    res.status(200).send({
        tasks: allTasks
    });
};

const getTaskDetails = async (req, res) => {
    const {id} = req.params;
    try{
        const taskDetails = await Task.findOne({_id: id});
        if (!taskDetails){
            res.status(500).send('Task not found for this ID');
        }
        else{
            res.status(200).send({
                task: taskDetails
            })
        }
    }
    catch(e){
        console.log(e);
    }

}

module.exports = {
    createTask,
    getAllTasks,
    getTaskDetails
}
