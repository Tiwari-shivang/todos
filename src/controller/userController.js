const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECREAT = 'MY_SECREAT_KEY';

const registerUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
        res.status(409).send({ message: 'Email already exist Mother Fucker!' });
    }
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            res.status(500).send({ message: 'Error saving data' });
        }
        const user = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            password: hashedPassword,
            taskIDs: req.body.taskIDs
        })
        user.save().then(() => {
            res.status(200).send(
                {
                    message: 'Signed up successfully!',
                    user: {
                        email: req.body.email,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        gender: req.body.gender,
                        taskIDs: req.body.taskIDs
                    }
                })
        }).catch((e) => console.log(e));
    })
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        res.status(404).send({ message: `User with email ${email} not found` })
    }
    else {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) {
                res.status(401).send({ message: `Password is incorrect` });
            }
            // JWT generation
            const token = jwt.sign({
                userID: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.gender,
                taskIDs: user.taskIDs
            }, JWT_SECREAT, { expiresIn: '2h' });
            res.status(200).send({
                user: {
                    uid: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender: user.gender,
                    taskIDs: user.taskIDs
                },
                auth: token
            });
        });
    }
}

module.exports = {
    registerUser,
    loginUser
}