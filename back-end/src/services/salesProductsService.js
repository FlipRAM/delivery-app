const { salesProducts } = require('../database/models/index');

const getSalesProductsService = async () => {
  const results = await salesProducts.findAll();
  return results;
};

module.exports = { getSalesProductsService };