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
  
  const { dataValues } = await users.create(userDTO);
  console.log(dataValues);
  
  return dataValues;
};

const deleteUserById = async (id, token) => {
  const userInfo = verifyToken(token);

  if (userInfo.role !== 'administrator') throw new ErrorProvider(403, 'Usuário nao autorizado');

  const results = await users.delete({ where: { id } });
  return results;
};

module.exports = { getSellers, getUserList, saveNewUser, deleteUserById };
