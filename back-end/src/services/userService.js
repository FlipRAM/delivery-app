const { users } = require('../database/models/index');

const getAllUsers = async () => {
  const results = await users.findAll();
  return results;
};

module.exports = { getAllUsers };