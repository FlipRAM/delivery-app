const express = require('express');
const controller = require('../controller/saleController');

const saleRouter = express.Router();

saleRouter.post('/customer/sales', controller.postSale);

module.exports = saleRouter;