const { salesproducts } = require('../database/models/index');

const getSalesProductsService = async () => {
  const results = await salesproducts.findAll();
  return results;
};

module.exports = { getSalesProductsService };