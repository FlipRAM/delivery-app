const md5 = require('md5');
const ErrorProvider = require('../error');
const { users } = require('../database/models');
const JWT = require('../utils/JWT/JWT.Generate');

const loginService = async ({ email, password }) => { 
  const result = await users.findOne({ where: { email } });

  const passConverted = md5(password).toString();

  if (!result) throw new ErrorProvider(404, 'User Not found');
  if (passConverted !== result.dataValues.password) throw new ErrorProvider(404, 'User not found');
console.log(result.dataValues);
  
delete result.dataValues.password;
delete result.dataValues.id;

const userData = result.dataValues;
  
console.log(userData);
  
const token = JWT.createToken({ email, password });
const resultToReturn = { ...result.dataValues, token };

  return resultToReturn;
};

module.exports = { loginService };