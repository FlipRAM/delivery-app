const md5 = require('md5');
const ErrorProvider = require('../error');
const { users } = require('../database/models');

const registerService = async ({ name, email, password }) => {
  const passConverted = md5(password).toString();
  const match = await users.findOne({ where: { email } });
  
  if (match) {
    throw new ErrorProvider(409, 'Conflict');
  }
  
  const result = await users.create({ name, email, password: passConverted });
  console.log(result);
};

module.exports = { registerService };
