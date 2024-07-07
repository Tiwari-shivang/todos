const express = require('express');
const userRouter = require('./userRoutes');
const taskRouter = require('./taskRoutes');
const router = express.Router();

router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;

