const { postSales } = require('../services/salesService');

const salesController = async (_request, response) => {
  // const { body } = request;
  // const sales = await postSales(body);
  response.status(201).json();
};

module.exports = { salesController };