const { users } = require('../database/models');

const getSellers = async () => {
  console.log('aqui');
  const results = await users.findAll({ where: { role: 'seller' } });
  return results;
};

module.exports = { getSellers };