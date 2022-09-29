const service = require('../services/saleProductsServices');

const getSalesProductsById = async (request, response) => {
  const { id } = request.params;
  
  const results = await service.getSalesProductsById(id);
  response.status(200).json(results);
};

module.exports = { getSalesProductsById };
