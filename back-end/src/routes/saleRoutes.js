const express = require('express');
const controller = require('../controller/saleController');
const auth = require('../middleware/authMiddleware');

const saleRouter = express.Router();

saleRouter.post('/customer/sales', controller.postSale);

module.exports = saleRouter;