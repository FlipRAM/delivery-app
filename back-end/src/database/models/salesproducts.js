'use strict';

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const SaleProductsModel = (sequelize, DataTypes) => { 
  const SaleProducts = sequelize.define('salesProducts', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  // salesProducts.associate = (models) => {
  //   models.products.belongsToMany(models.sales, {
  //     as: 'sales',
  //     through: salesProducts,
  //     foreignKey: 'productId',
  //     otherKey: 'saleId',
  //   })
  //   models.sales.belongsToMany(models.products, {
  //     as: 'products',
  //     through: salesProducts,
  //     foreignKey: 'saleId',
  //     otherKey: 'productId',
  //   })
  // }
  return SaleProducts;
};

module.exports = SaleProductsModel;