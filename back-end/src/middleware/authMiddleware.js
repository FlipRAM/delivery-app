const { verifyToken } = require("../utils/jwtService");


const auth = (req, _res, next) => {
  const { authorization } = req.headers;
  const token = verifyToken(authorization);
  req.user = token;
  next();
};

module.exports = auth;