'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: false,
    underscored: true
  })
  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'postUser',
    })
  }
  return blogPosts;
};