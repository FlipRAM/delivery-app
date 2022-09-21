const ErrorProvider = require('../error');

const error = (errorLike, _req, res, _next) => {
  if (errorLike instanceof ErrorProvider) {
    return res.status(errorLike.status || 500).json({
      message: errorLike.message,
    });
  }
  return res.status(500).json({
    message: errorLike.message,
  });
};

module.exports = error;