const express = require('express');
const controller = require('../controller/saleController');

const saleRouter = express.Router();

saleRouter.post('/customer/sales', controller.postSale);

saleRouter.get('/customer/sales/:id', controller.getSaleById);

saleRouter.get('/customer/sales', controller.getSaleList);

saleRouter.get('/seller/sales/:id', controller.getSaleById);

saleRouter.put('/seller/sales/:id', controller.updateStatus);

module.exports = saleRouter;