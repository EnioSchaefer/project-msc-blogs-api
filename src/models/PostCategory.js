'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategory', {
    post_id: { allowNull: false, primaryKey: true, foreignKey: true, type: DataTypes.INTEGER },
    category_id: { allowNull: false, primaryKey: true, foreignKey: true, type: DataTypes.INTEGER }
  }, {
    timestamps: false,
    underscored: true
  })
  return PostCategories;
};