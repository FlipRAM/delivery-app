const md5 = require('md5');
const { users } = require('../database/models');
const ErrorProvider = require('../error');
const verifyToken = require('../utils/JWT.verify');

const getSellers = async () => {
  const results = await users.findAll({ where: { role: 'seller' } });
  return results;
};

const getUserList = async () => {
  const results = await users.findAll();
  return results;
};

const saveNewUser = async (userDTO, token) => {
  const userInfo = verifyToken(token);
  if (userInfo.role !== 'administrator') throw new ErrorProvider(401, 'Usuário nao autorizado');
  
  const checkUser = await getUserList();
  const validateInfo = checkUser
  .some(({ name, email }) => userDTO.name === name || userDTO.email === email);
  
  if (validateInfo) {
    throw new ErrorProvider(409, 'Usuário ja cadastrado');
  }
  
  const passConverted = md5(userDTO.password).toString();

  await users.create({ ...userDTO, password: passConverted });
  
  // return results.dataValues;
};

const checkUser = async (token) => {
  const user = verifyToken(token);
  return user;
};

const deleteUserById = async (id, token) => {
  const userInfo = verifyToken(token);

  if (userInfo.role !== 'administrator') throw new ErrorProvider(403, 'Usuário nao autorizado');

  const checkReturn = await users.destroy({ where: { id } });

  if (!checkReturn) throw new ErrorProvider(404, 'Id Invalido');

  const results = await getUserList();
  console.log(results);
  
  return results;
};

module.exports = {
  getSellers,
  checkUser,
  getUserList,
  saveNewUser,
  deleteUserById,
};
