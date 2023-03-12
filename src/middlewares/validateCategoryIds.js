const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds.includes(1) && !categoryIds.includes(2)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = validateCategoryIds;
