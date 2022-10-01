const md5 = require('md5');
const ErrorProvider = require('../error');
const { users } = require('../database/models');
const { getUserList } = require('./userServices');

const registerService = async ({ name, email, password }) => {
  const passConverted = md5(password).toString();

  const userList = await getUserList();
  const validateIfExists = userList
    .some((each) => name === each.name || email === each.email);
  
  if (validateIfExists) {
    throw new ErrorProvider(409, 'Conflict, Usuário ja cadastrado');
  }
  
  await users.create({ name, email, password: passConverted });
};

module.exports = { registerService };
