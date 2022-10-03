const express = require('express');
const controller = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/sellers', controller.getSellers);

userRouter.get('', controller.getUserList);

userRouter.post('/verify', controller.checkValidUser);

userRouter.post('', controller.saveNewUser);

userRouter.delete('/:id', controller.deleteUserById);

module.exports = userRouter;
