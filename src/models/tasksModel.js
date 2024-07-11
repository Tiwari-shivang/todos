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
        default: false,
    },
    dueDate: {
        type: Date,
        default: () => new Date(new Date() + 60 * 60 * 1000)
    },
    isReminder: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        default: 'WORK'
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    },
    reminderOn: {
        type: Date,
        default: () => new Date(new Date() + 60 * 60 * 1000)
    },
    createdBy: {
        type: String,
        required: true
    },
});

const Task = mongoose.model('Task', TasksModel);
module.exports = Task;