const { products } = require('../database/models');

const getAllProducts = async () => {
  const results = await products.findAll();
  return results;
};

module.exports = { getAllProducts };