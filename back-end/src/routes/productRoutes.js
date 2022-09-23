const express = require('express');
const { productController } = require('../controller/productsController');

const productRouter = express.Router();

productRouter.get('/customer/products', productController);

module.exports = productRouter;