const service = require('../services/saleServices');

const postSale = async (request, response) => {
  const token = request.headers.authorization;
  const { saleObj, products } = request.body;
  
  const dataValues = await service.postSale(saleObj, products, token);
  response.status(201).json({ id: dataValues.id });
};

const getSaleByIdWithFullInfo = async (request, response) => {
  const { id } = request.params;
  
  const results = await service.getSaleByIdWithFullInfo(id);
  response.status(200).json(results);
};

const getSaleList = async (_request, response) => {
  const results = await service.getSaleList();
  response.status(200).json(results);
};

const updateStatus = async (request, response) => {
  const { id } = request.params;
  const { status } = request.body;
  const results = await service.updateStatus(id, status);
  response.status(200).json(results);
};

const getAllSalesWithFullInfo = async (request, response) => {
  const { id } = request.params;
  const results = await service.getAllSalesWithFullInfo(id);
  response.status(200).json(results);
}

const getSaleWithProductsById = async (request, response) => {
  const { id } = request.params;
  const result = await service.getSaleWithProductsById(id);

  response.status(200).json(result);
}

module.exports = { postSale, getSaleList, updateStatus, getSaleByIdWithFullInfo, getAllSalesWithFullInfo, getSaleWithProductsById };
