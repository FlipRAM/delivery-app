const { sales, salesProducts } = require('../database/models');

const postSale = async (saleObj) => {
  const { id } = await sales.create(saleObj);
  
  
  return id;
};

module.exports = { postSale };