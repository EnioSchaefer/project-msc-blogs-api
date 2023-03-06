'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, allowNull: false }
  }, {
    timestamps: false,
    underscored: true
  })
  return categories;
};