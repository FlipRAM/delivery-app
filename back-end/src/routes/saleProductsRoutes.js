const express = require('express');
const controller = require('../controller/saleProductsController');

const saleProductsRouter = express.Router();

saleProductsRouter.get('/salesProducts/:id', controller.getSalesProductsById);

module.exports = saleProductsRouter;