const { userService } = require('../services');

const checkEmail = async (email) => {
  const rawUsers = await userService.getEmails();
  const users = rawUsers.map((user) => user.dataValues.email);

  return users.includes(email);
};

module.exports = checkEmail;