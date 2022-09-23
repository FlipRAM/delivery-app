const jwt = require('jsonwebtoken');
require('dotenv').config();

class JWT {
  static createToken(userInfo) {
    const token = jwt.sign({ data: userInfo }, process.env.JWT_SECRET || 'secret_key', {
      expiresIn: 2 * 7 * 3,
      algorithm: 'HS256',
    });
    return token;
  }
}

module.exports = JWT;
