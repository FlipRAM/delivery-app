const express = require('express');
const controller = require('../controller/saleController');

const saleRouter = express.Router();

saleRouter.post('/customer', controller.postSale);

saleRouter.get('/customer/:id', controller.getSaleByIdWithFullInfo);

saleRouter.get('/customer', controller.getSaleList);

saleRouter.get('/customer/:id/orders', controller.getAllSalesCustomerWithFullInfo);

saleRouter.get('/seller/:id/orders', controller.getAllSalesSellerWithFullInfo);

saleRouter.get('/:id', controller.getSaleWithProductsById);

saleRouter.put('/:id', controller.updateStatus);

module.exports = saleRouter;