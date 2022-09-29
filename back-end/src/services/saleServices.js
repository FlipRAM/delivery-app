const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { sales, salesProducts, products, users } = require('../database/models');
const ErrorProvider = require('../error');
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

const getSaleByIdWithFullInfo = async (id) => {
  const results = await sales.findOne({ where: { id },
  include: [
    {
      model: products,
      as: 'product',
      through: {attributes: ['quantity']}
    },
    {
      model: users,
      as: 'seller'
    }
  ] });
  return results;
};

const getSaleList = async () => {
  const results = await sales.findAll();
  return results;
};

const updateSale = async (id) => {
  const results = await sales.update({status:'Entregue'}, { where: {id} });
  if (!results) throw new ErrorProvider(404, 'Update fail');
  const sale = await getSaleByIdWithFullInfo(id);
  return sale;
};

module.exports = { postSale, getSaleByIdWithFullInfo, getSaleList, updateSale };