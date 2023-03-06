const { userService } = require('../services');

const checkId = async (id) => {
  const rawIds = await userService.getIds();
  const ids = rawIds.map((userId) => userId.dataValues.id);

  return ids.includes(id);
};

module.exports = checkId;