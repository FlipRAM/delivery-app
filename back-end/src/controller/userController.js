const { getSellers, getUserIdService } = require('../services/userServices');

const userController = async (_request, response) => {
  const sellers = await getSellers();
  response.status(200).json(sellers);
};

const getUserId = async (request, response) => {
  const email = request.query;
  const id = await getUserIdService(email);
  response.status(200).json({ id });
};

module.exports = { userController, getUserId };
