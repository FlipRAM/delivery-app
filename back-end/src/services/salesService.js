const { sales } = require('../database/models/index');

const postSales = async (body) => {
  const results = await sales.create(body)
  return results;
};

module.exports = { postSales };