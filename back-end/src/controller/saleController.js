const service = require('../services/saleServices');

const postSale = async (request, response) => {
  const token = request.headers.authorization;
  const { saleObj, products } = request.body;
  
  const dataValues = await service.postSale(saleObj, products, token);
  response.status(201).json({ id: dataValues.id });
};

const getSaleById = async (request, response) => {
  const { id } = request.params;
  
  const results = await service.getSaleById(id);
  response.status(200).json(results);
};

const getSaleList = async (_request, response) => {
  const results = await service.getSaleList();
  response.status(200).json(results);
};

module.exports = { postSale, getSaleById, getSaleList };
