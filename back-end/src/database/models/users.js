'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  return User;
};