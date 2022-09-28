'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  Sales.associate = (models) => {
    Sales.belongsTo(models.users, {
      foreignKey: 'sellerId',
      as: 'seller',
    });
  };

  return Sales;
};