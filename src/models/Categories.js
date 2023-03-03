'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  })
  return categories;
};