const { users } = require('../database/models');
const verifyToken = require('../utils/JWT.verify');

const getSellers = async () => {
  const results = await users.findAll({ where: { role: 'seller' } });
  return results;
};

const getUserIdService = async (email) => {
  const { id } = await users.findOne({ where: { email } });
  return id;
};

const checkUser = async (token) => {
  const user = verifyToken(token);
  return user;
};

module.exports = { getSellers, getUserIdService, checkUser };