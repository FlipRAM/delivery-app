const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { sales, salesProducts } = require('../database/models');
const verifyToken = require('../utils/JWT.verify');

const sequelize = new Sequelize(config.development);

const postSale = async (saleObj, products, token) => {
  const userInfo = verifyToken(token);

  const idToReturn = await sequelize.transaction(async (flow) => {
    const { id } = await sales.create({ userId: userInfo.id, ...saleObj },
      { transaction: flow });
    salesProducts.bulkCreate(products
      .map((product) => ({ saleId: id, productId: product.id, quantity: product.quantity }),
        { transaction: flow }));
        return id;
  });
  return idToReturn;
};

module.exports = { postSale };