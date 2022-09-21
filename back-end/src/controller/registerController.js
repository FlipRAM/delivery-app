const { registerService } = require('../services/registerServices');

const registerController = async (request, response) => {
  const { body } = request;
  
  await registerService(body);
  response.status(201).json();
};

module.exports = { registerController };