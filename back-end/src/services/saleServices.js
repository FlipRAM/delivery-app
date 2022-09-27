const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { sales, salesProducts } = require('../database/models');
const { verifyToken } = require('../utils/jwtService');

const sequelize = new Sequelize(config.development);

const postSale = async (saleObj, products, token) => {
  verifyToken(token);
  const idToReturn = sequelize.transaction(async (flow) => {
    const { id } = await sales.create(saleObj,
      { transaction: flow });
    salesProducts.bulkCreate(products
      .map((product) => ({ saleId: id, productId: product.id, quantity: product.quantity }),
        { transaction: flow }));
        return id;
  })
  return idToReturn;
};

module.exports = { postSale };