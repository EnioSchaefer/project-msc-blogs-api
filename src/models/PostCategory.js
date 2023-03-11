'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true
  })
  PostCategories.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategories,
      as: 'posts'
    }),
      BlogPost.belongsToMany(Category, {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategories,
        as: 'categories'
      })
  }
  return PostCategories;
};