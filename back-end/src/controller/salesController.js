const { postSales, getAllSales } = require('../services/salesService');

const salesController = async (request, response) => {
  const { body } = request;
  console.log('ENTREIIIIIIII');
  const sales = await postSales(body);
  response.status(201).json(sales);
};

const getSales = async (_request, response) => {
  const sales = await getAllSales();
  response.status(200).json(sales);
};

module.exports = { salesController, getSales };