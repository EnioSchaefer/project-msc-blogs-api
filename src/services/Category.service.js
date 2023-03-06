const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  getAllCategories,
};