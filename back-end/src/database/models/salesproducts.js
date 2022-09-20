'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  salesProducts.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  salesProducts.belongsTo(sales, {
    foreignKey: 'saleId', 
    as: 'saleId'
  });
  
  salesProducts.belongsTo(products, {
    foreignKey: 'productId', 
    as: 'productId'
  });


  return salesProducts;
};