const service = require('../services/saleServices');
const { verifyToken } = require('../utils/jwtService');

const postSale = async (request, response) => {
  const { body } = request;  

  const id = await service.postSale(body);
  response.status(201).json({ id });
};

module.exports = { postSale };
