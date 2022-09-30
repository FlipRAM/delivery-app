const services = require('../services/userServices');

const userController = async (_request, response) => {
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
  const token = request.headers.authorization;
  const user = await services.checkUser(token);
  if (user) response.status(200).json();
};

const deleteUserById = async (request, response) => {
  const { id } = request.params;
  const token = request.headers.authorization;
  
  const results = await services.deleteUserById(id, token);
  response.status(204).json(results);
};

module.exports = {
  userController,
  checkValidUser,
  getUserList,
  saveNewUser,
  deleteUserById,
};
