const { User } = require('../models');

const getByEmail = async (email) => {
  const login = await User.findOne({ where: { email } });

  return login;
};

module.exports = {
  getByEmail,
};