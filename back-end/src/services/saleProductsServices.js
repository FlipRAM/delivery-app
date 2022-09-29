const { salesProducts } = require('../database/models');

const getSalesProductsById = async (id) => {
  const results = salesProducts.findAll({ where: { saleId: id } });
  return results;
};

module.exports = { getSalesProductsById };