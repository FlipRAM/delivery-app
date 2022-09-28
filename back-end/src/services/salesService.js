const { sales } = require('../database/models/index');

const postSales = async (body) => {
  const results = await sales.create(body)
  return results;
};
const getAllSales = async () => {
  const results = await sales.findAll();
  return results;
};

module.exports = { postSales, getAllSales };