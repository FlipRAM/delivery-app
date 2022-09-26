const md5 = require('md5');
const ErrorProvider = require('../error');
const { users } = require('../database/models');
const { createToken } = require('../utils/jwtService');

const loginService = async ({ email, password }) => { 
  const result = await users.findOne({ where: { email } });

  const passConverted = md5(password).toString();

  if (!result) throw new ErrorProvider(404, 'User Not found');
  if (passConverted !== result.dataValues.password) throw new ErrorProvider(404, 'User not found');

  delete result.dataValues.password;
  delete result.dataValues.id;

  const userDataToToken = result.dataValues;

  const token = createToken(userDataToToken);

  const resultToReturn = { ...result.dataValues, token };

  return resultToReturn;
};

module.exports = { loginService };
