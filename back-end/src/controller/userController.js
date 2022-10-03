const services = require('../services/userServices');

const getSellers = async (_request, response) => {
  const sellers = await services.getSellers();
  response.status(200).json(sellers);
};

const getUserList = async (_request, response) => {
  const results = await services.getUserList();
  response.status(200).json(results);
};

const saveNewUser = async (request, response) => {
  const userDTO = request.body;
  const token = request.headers.authorization;
  
  await services.saveNewUser(userDTO, token);
  
  response.status(201).end();
};

const checkValidUser = async (request, response) => {
  console.log(request.headers);
  const token = request.headers.authorization;
  const result = await services.checkUser(token);
  response.status(200).json(result);
};

const deleteUserById = async (request, response) => {
  const { id } = request.params;
  const token = request.body;
  
  const results = await services.deleteUserById(id, token.token);
  response.status(201).json(results);
};

module.exports = {
  getSellers,
  checkValidUser,
  getUserList,
  saveNewUser,
  deleteUserById,
};
