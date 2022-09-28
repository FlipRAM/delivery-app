const express = require('express');
const { salesController, getSales } = require('../controller/salesController');

const salesRouter = express.Router();

salesRouter.post('/sales', salesController);
salesRouter.get('/sales', getSales);

module.exports = salesRouter;


