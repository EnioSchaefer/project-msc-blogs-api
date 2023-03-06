const checkEmail = require('../utils/checkEmail');

const validateUserInsertionBody = (req, res, next) => {
  const user = req.body;

  if (!user || !user.password || !user.displayName || !user.email) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }

  return next();
};

const emailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/);

const validateUserInsertion = async (req, res, next) => {
  const user = req.body;

  if (user.displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!emailRegex.test(user.email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  if (user.password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  if (await checkEmail(user.email)) {
    return res.status(409)
      .json({ message: 'User already registered' });
  }

  return next();
};

module.exports = {
  validateUserInsertionBody,
  validateUserInsertion,
};