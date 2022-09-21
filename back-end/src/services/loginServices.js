const md5 = require('md5');
const ErrorProvider = require('../error');
const { users } = require('../database/models/index');

const loginService = async ({ email, password }) => { 
  const result = await users.findOne({ where: { email } });

  const passConverted = md5(password).toString();

  if (!result) throw new ErrorProvider(404, 'Not found');
  if (passConverted !== result.dataValues.password) throw new ErrorProvider(404, 'Not found');
  
  delete result.dataValues.password;
  return result;
};

module.exports = { loginService };