const jwt = require('jsonwebtoken');
const fs = require('fs');
const ErrorProvider = require('../error');

const senha = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const verifyToken = (token) => {
  try {
    const data = jwt.verify(token, senha);    
    return data;
  } catch (error) {
    throw new ErrorProvider(405, error.message);
  }
};

module.exports = verifyToken;
