const service = require('../services/saleServices');

const postSale = async (request, response) => {
  const token = request.headers.authorization;
  const { saleObj, products } = request.body;
  
  const id = await service.postSale(saleObj, products, token);
  response.status(201).json({ id });
};

const getSaleById = async (request, response) => {
  const { id } = request.params;
  
  const results = await service.getSaleById(id);
  response.status(200).json(results);
};

module.exports = { postSale, getSaleById };
