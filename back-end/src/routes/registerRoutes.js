const express = require('express');
const { registerController } = require('../controller/registerController');

const registerRouter = express.Router();

registerRouter.post('/register', registerController);

module.exports = registerRouter;