const { getSalesProductsService } = require('../services/salesProductsService');

const getSalesProductsController = async (_request, response) => {
  const saleProducts = await getSalesProductsService();
  response.status(200).json(saleProducts);
};

module.exports = { getSalesProductsController };