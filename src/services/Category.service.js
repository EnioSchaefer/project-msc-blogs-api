const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

const insertCategory = async (category) => {
  const result = await Category.create(category);

  return result;
};

module.exports = {
  getAllCategories,
  insertCategory,
};