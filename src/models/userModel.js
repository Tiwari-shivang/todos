const { Schema, default: mongoose } = require("mongoose");

const tasksEnum = {
    task_ID: String,
    task_Name: String
}

const UserModel = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    taskIDs:{
        type: [tasksEnum],
        default: []
    },
    joined:{
        type: String,
        default: Date.now
    }
});

const User = mongoose.model('User', UserModel);
module.exports = User;