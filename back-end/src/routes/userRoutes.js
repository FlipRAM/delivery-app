const express = require('express');
const { getUsers } = require('../controller/userController');

const usersRouter = express.Router();

usersRouter.get('/users', getUsers);

module.exports = usersRouter;