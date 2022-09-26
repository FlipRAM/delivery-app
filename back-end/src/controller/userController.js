const { getSellers } = require('../services/userServices');

const userController = async (_request, response) => {
  const sellers = await getSellers();
  response.status(200).json(sellers);
};

module.exports = { userController };
