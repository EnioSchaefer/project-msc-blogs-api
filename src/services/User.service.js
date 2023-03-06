const { User } = require('../models');

const getEmails = async () => {
  const emails = await User.findAll({ attributes: ['email'] });

  return emails;
};

const getByEmail = async (email) => {
  const login = await User.findOne({ where: { email } });

  return login;
};

const insertUser = async (user) => {
  const result = await User.create(user);

  return result;
};

module.exports = {
  getEmails,
  getByEmail,
  insertUser,
};