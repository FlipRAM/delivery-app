const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { sales, salesProducts } = require('../database/models');
const verifyToken = require('../utils/JWT.verify');

const sequelize = new Sequelize(config.development);

const postSale = async (saleObj, products, token) => 
  sequelize.transaction(async (flow) => {
    const userInfo = verifyToken(token);

    const { dataValues } = await sales.create({ userId: userInfo.id, ...saleObj },
      { transaction: flow });
    
    salesProducts.bulkCreate(products
      .map((product) => ({
        saleId: dataValues.id, productId: product.id, quantity: product.quantity,
      }),
        { transaction: flow }));
    
    return dataValues;
  });

const getSaleById = async (id) => {
  const results = sales.findOne({ where: { id } });
  return results;
};

const getSaleList = async () => {
  const results = sales.findAll();
  return results;
};

const updateStatus = async (id, status) => {
  const result = sales.update({ status }, { where: { id } });
  return result;
}

module.exports = { postSale, getSaleById, getSaleList, updateStatus };