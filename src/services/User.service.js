const { User } = require('../models');

const getEmails = async () => {
  const emails = await User.findAll({ attributes: ['email'] });

  return emails;
};

const getIds = async () => {
  const ids = await User.findAll({ attributes: ['id'] });

  return ids;
};

const getByEmail = async (email) => {
  const login = await User.findOne({ where: { email } });

  return login;
};

const insertUser = async (user) => {
  const result = await User.create(user);

  return result;
};

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });

  return user;
};

module.exports = {
  getEmails,
  getIds,
  getByEmail,
  insertUser,
  getAllUsers,
  getUserById,
};