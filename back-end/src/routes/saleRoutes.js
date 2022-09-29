const express = require('express');
const controller = require('../controller/saleController');

const saleRouter = express.Router();

saleRouter.post('/customer/sales', controller.postSale);

saleRouter.get('/customer/sales/:id', controller.getSaleByIdWithFullInfo);

saleRouter.get('/customer/sales', controller.getSaleList);

module.exports = saleRouter;