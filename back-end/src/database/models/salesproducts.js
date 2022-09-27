'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  },
  {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsToMany(models.sales, {
      through: SalesProducts,
      foreignKey: 'saleId',
      as: 'sale',
    });
  };


  SalesProducts.associate = (models) => {
    SalesProducts.belongsToMany(models.products, {
      through: SalesProducts,
      foreignKey: 'productId',
      as: 'product',
    });
  };

  return SalesProducts;
};