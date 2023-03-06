const { categoryService } = require('../services');

const getAllCategories = async (_req, res) => {
  try {
    const categories = await categoryService.getAllCategories();

    if (!categories) return res.status(500).json({ message: 'Internal Error' });

    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const insertCategory = async (req, res) => {
  try {
    const category = req.body;
    const result = await categoryService.insertCategory(category);

    if (!result) return res.status(500).json({ message: 'Internal Error' });

    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllCategories,
  insertCategory,
};