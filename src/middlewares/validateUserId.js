const checkId = require('../utils/checkId');

const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  const numberId = Number(id);

  const validation = await checkId(numberId);

  if (!validation) return res.status(404).json({ message: 'User does not exist' });

  return next();
};

module.exports = validateUserId;