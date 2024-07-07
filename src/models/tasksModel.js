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
        required: true,
        default: false
    },
    dueDate: {
        type: String,
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
        type: Boolean,
        default: false
    },
    createdOn: {
        type: String,
        required: true,
        default: Date.now
    },
    modifiedOn: {
        type: String
    },
    reminderOn: {
        type: String,
    },
    createdBy: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', TasksModel);
module.exports = Task;