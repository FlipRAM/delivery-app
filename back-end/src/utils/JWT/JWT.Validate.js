const { verify } = require('jsonwebtoken');
require('dotenv').config();

class ValidateJWT {
  static validateToken(token) {
    const data = verify(token, process.env.JWT_SECRET || 'secret_key');
    return data;
  }
}

module.exports = ValidateJWT;
