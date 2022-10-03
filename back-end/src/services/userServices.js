const md5 = require('md5');
const { users } = require('../database/models');
const ErrorProvider = require('../error');
const verifyToken = require('../utils/JWT.verify');

const getSellers = async () => {
  const results = await users.findAll({ where: { role: 'seller' } });
  return results;
};

const getUserList = async () => {
  const results = await users.findAll({ raw: true });
  return results;
};

const saveNewUser = async (userDTO, token) => {
  const userInfo = verifyToken(token);
  if (userInfo.role !== 'administrator') throw new ErrorProvider(401, 'Usuário nao autorizado');
  
  const userList = await getUserList();
  const validateIfExists = userList
  .some(({ name, email }) => userDTO.name === name || userDTO.email === email);
  
  if (validateIfExists) {
    throw new ErrorProvider(409, 'Usuário ja cadastrado');
  }

  const passConverted = md5(userDTO.password).toString();
  const userToSave = { ...userDTO, password: passConverted };
  
  await users.create(userToSave);
  
  // await getUserList();
};

// const userList = async (token) => {
//   const user = verifyToken(token);
//   return user;
// };

const deleteUserById = async (id, token) => {
  const userInfo = verifyToken(token);

  if (userInfo.role !== 'administrator') throw new ErrorProvider(403, 'Usuário nao autorizado');

  const checkReturn = await users.destroy({ where: { id } });

  if (!checkReturn) throw new ErrorProvider(404, 'Id Invalido');

  const results = await getUserList();

  return results;
};

const checkUser = async (token) => {
  const user = verifyToken(token);
  return user;
};

module.exports = {
  getSellers,
  // userList,
  getUserList,
  saveNewUser,
  deleteUserById,
  checkUser,
};
