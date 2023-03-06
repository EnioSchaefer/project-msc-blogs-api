'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    displayName: DataTypes.STRING,
    email: { unique: true, type: DataTypes.STRING },
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true
  })
  return users;
};