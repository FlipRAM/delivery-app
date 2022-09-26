const express = require('express');
const { userController } = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/users/sellers', userController);

module.exports = userRouter;