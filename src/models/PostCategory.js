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
    underscored: true
  })
  PostCategories.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategories,
      as: 'categories'
    }),
      BlogPost.belongsToMany(Category, {
        foreignKey: 'post_id',
        otherKey: 'category_id',
        through: PostCategories,
        as: 'posts'
      })
  }
  return PostCategories;
};