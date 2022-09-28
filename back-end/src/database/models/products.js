'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  },
  {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  return Products;
};