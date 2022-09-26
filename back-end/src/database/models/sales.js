'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sales.init({
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sales',
    timestamps: false,
    underscored: true,
  });

  // sales.belongsTo('users', {
  //   foreignKey: 'userId', 
  //   as: 'userId'
  // });
  
  // sales.belongsTo('users', {
  //   foreignKey: 'sellerId', 
  //   as: 'sellerId'
  // });
  
  return sales;
};

// checar depois a necessidade
// users.hasMany(sales, {
//   foreignKey: 'userId', 
//   as: 'userId'
// });

// users.hasMany(sales, {
//   foreignKey: 'seller_id', 
//   as: 'seller_id'
// });