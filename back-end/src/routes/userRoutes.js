const express = require('express');
const controller = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/users/sellers', controller.getSellers);

userRouter.get('/users', controller.getUserList);

userRouter.post('/users/verify', controller.checkValidUser);

userRouter.post('/users', controller.saveNewUser);

userRouter.delete('/users/:id', controller.deleteUserById);

module.exports = userRouter;
