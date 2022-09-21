const ErrorProvider = require('../error');
const { users } = require('../database/models/index');

const loginService = async ({ email, password }) => { 
  const result = await users.findOne({ where: { email } });

  if (!result) throw new ErrorProvider(404, 'Not found');
  if (password !== result.dataValues.password) throw new ErrorProvider(404, 'Not found');
  
  delete result.dataValues.password;
  return result;
};

module.exports = { loginService };