'use strict';

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const SaleModel = (sequelize, DataTypes) => { 
  const Sale = sequelize.define('sales', {
    userId: DataTypes.INTEGER,
    sellerId:DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });
  
  // Sale.associate = (models) => {
  //   Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'userId' });
  //   Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'sellerId' });
  // };

    return Sale;
  };