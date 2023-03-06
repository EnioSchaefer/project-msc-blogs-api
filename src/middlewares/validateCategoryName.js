const validateCategoryName = (req, res, next) => {
  const categoryName = req.body.name;

  if (!categoryName || categoryName === '') {
    return res.status(400).json({ message: '"name" is required' });
  }

  return next();
};

module.exports = validateCategoryName;