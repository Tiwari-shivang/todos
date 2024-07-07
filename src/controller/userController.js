const User = require("../models/userModel")

const registerUser = async (req, res) => {
    const user = new User(req.body);
    await user.save().then(() => {
        res.status(200).send({
            message: 'User registerd successfully !',
            user: req.body
        });
    }).catch((e) => {
        res.status(500).send({
          message: "not able to register user"  
        });
        console.log(e);
    });
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    console.log({
        "email": email,
        "password": password
    });
    res.status(200).send({message: 'test'});
}

module.exports = {
    registerUser,
    loginUser
}