const { getSellers, getUserIdService, checkUser } = require('../services/userServices');

const userController = async (_request, response) => {
  const sellers = await getSellers();
  response.status(200).json(sellers);
};

const getUserId = async (request, response) => {
  const email = request.query;
  const id = await getUserIdService(email);
  response.status(200).json({ id });
};

const checkValidUser = async (request, response) => {
  const token = request.headers.authorization;
  const user = await checkUser(token);

  if (user) response.status(200).json();
};

module.exports = { userController, getUserId, checkValidUser };
