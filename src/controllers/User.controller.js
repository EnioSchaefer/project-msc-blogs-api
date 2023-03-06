const jwt = require('jsonwebtoken');
require('dotenv/config');
const { userService } = require('../services');

const validateLoginBody = (username, password) => username && password;

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validateLoginBody(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await userService.getByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = jwt.sign({ data: userWithoutPassword },
      process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '15min' });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  userLogin,
};