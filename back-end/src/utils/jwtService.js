require('dotenv/config');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const ErrorProvider = require('../error');

const senha = fs.readFileSync('jwt.evaluation.key');

const createToken = (user) => {
  const token = jwt.sign({ data: user }, senha, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, senha);
    return decoded;
  } catch (error) {
    throw new ErrorProvider(404, 'expired or invalid token');
  }
};

module.exports = {
  createToken,
  verifyToken,
};
