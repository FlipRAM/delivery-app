const express = require('express');
const { productController } = require('../controller/productsController');

const productRouter = express.Router();

productRouter.get('/customer', productController);

module.exports = productRouter;