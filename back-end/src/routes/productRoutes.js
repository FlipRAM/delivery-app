const express = require('express');
const { productController } = require('../controller/productsController');

const productRouter = express.Router();

productRouter.get('/products/customer', productController);

module.exports = productRouter;