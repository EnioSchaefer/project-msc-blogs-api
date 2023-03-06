const validateUserInsertionBody = (req, res, next) => {
  const user = req.body;

  if (!user || !user.password || !user.displayName || !user.email) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }

  return next();
};

module.exports = validateUserInsertionBody;