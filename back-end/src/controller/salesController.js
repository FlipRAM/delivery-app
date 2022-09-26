const { postSales } = require('../services/salesService');

const salesController = async (request, response) => {
  const { body } = request;
  const sales = await postSales(body);
  response.status(200).json(sales);
};

module.exports = { salesController };