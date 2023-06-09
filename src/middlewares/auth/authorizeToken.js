const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const authorizeToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const data = jwt.verify(authorization, secret);
    req.userData = data.payload;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
};

module.exports = authorizeToken;