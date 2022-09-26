const express = require('express');
const { salesController } = require('../controller/salesController');

const salesRouter = express.Router();

salesRouter.post('/sales', salesController);

module.exports = salesRouter;