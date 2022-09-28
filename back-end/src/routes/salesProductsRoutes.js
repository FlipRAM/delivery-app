const express = require('express');
const { getSalesProductsController } = require('../controller/salesProductsController');

const salesProductsRouter = express.Router();

salesProductsRouter.get('/salesProducts', getSalesProductsController);

module.exports = salesProductsRouter;