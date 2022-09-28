const jwt = require('jsonwebtoken');
const fs = require('fs');

const senha = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (user) => {
  const token = jwt.sign(user, senha, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = createToken;