const express = require('express');
const { loginController } = require('../controller/loginControllers');

const loginRouter = express.Router();

loginRouter.post('', loginController);

module.exports = loginRouter;