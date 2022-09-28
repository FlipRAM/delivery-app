const express = require('express');
const { userController, getUserId } = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/users/sellers', userController);
userRouter.get('/users', getUserId);

module.exports = userRouter;