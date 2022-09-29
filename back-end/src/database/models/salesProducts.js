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
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  SalesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProducts,
      as: 'sale',
    })
  };

  SalesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProducts,
      as: 'product',
    })
  };

  return SalesProducts;
};