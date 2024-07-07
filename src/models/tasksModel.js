const { Schema, default: mongoose } = require("mongoose");

const TasksModel = new Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDetails: {
        type: String,
        required: true
    },
    isPriority: {
        type: Boolean,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    isReminder: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean
    },
    createdOn: {
        type: Date,
        required: true
    },
    modifiedOn: {
        type: Date
    },
    reminderOn: {
        type: Date,
    },
});

const Task = mongoose.model('Task', TasksModel);
module.exports = Task;