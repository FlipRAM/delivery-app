const { users } = require('../database/models');

const getSellers = async () => {
  const results = await users.findAll({ where: { role: 'seller' } });
  return results;
};

const getUserIdService = async (email) => {
  const { id } = await users.findOne({ where: { email } });
  return id;
};

module.exports = { getSellers, getUserIdService };