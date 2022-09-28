const { getAllUsers } = require('../services/userService');

const getUsers = async (_request, response) => {
  const user = await getAllUsers();
  response.status(200).json(user);
};

module.exports = { getUsers };