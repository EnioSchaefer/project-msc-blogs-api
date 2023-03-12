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
    published: { defaultValue: DataTypes.NOW, type: DataTypes.DATE },
    updated: { defaultValue: DataTypes.NOW, type: DataTypes.DATE }
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true
  })
  blogPosts.associate = ({ User, PostCategory }) => {
    blogPosts.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user',
    }),
      blogPosts.hasMany(PostCategory, {
        foreignKey: 'postId',
        as: 'posts_categories'
      })
  }
  return blogPosts;
};