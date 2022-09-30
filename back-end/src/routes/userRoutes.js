const express = require('express');
const { userController, getUserId, checkValidUser } = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/users/sellers', userController);
userRouter.get('/users', getUserId);
userRouter.post('/users', checkValidUser);

module.exports = userRouter;
