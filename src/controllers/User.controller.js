const jwt = require('jsonwebtoken');
require('dotenv/config');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.getByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = jwt.sign({ payload: userWithoutPassword },
      secret, { algorithm: 'HS256', expiresIn: '1d' });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const insertUser = async (req, res) => {
  try {
    const user = req.body;

    const result = await userService.insertUser(user);

    if (!result) return res.status(500).json({ message: 'Internal error' });

    const { password: _, ...userWithoutPassword } = user;

    const token = jwt.sign({ payload: userWithoutPassword },
      secret, { algorithm: 'HS256', expiresIn: '1d' });

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    if (!users) return res.status(500).json({ message: 'Internal error' });

    const usersWithoutPassword = users.map((user) => {
      const { password: _, ...cleanUser } = user.dataValues;
      return cleanUser;
    });

    return res.status(200).json(usersWithoutPassword);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const numberId = Number(id);

    const user = await userService.getUserById(numberId);

    if (!user) return res.status(500).json({ message: 'Internal error' });

    const { password: _, ...userWithoutPassword } = user.dataValues;

    return res.status(200).json(userWithoutPassword);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.userData;

    await userService.deleteUser(id);

    return res.status(204).end();
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  userLogin,
  insertUser,
  getAllUsers,
  getUserById,
  deleteUser,
};