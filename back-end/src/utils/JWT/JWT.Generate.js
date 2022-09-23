const jwt = require('jsonwebtoken');

class JWT {
  static createToken(userInfo) {
    const token = jwt.sign({ data: userInfo }, process.env.JWT_SECRET || 'secret_key', {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return token;
  }
}

module.exports = JWT;
