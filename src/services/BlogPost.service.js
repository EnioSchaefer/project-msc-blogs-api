const { BlogPost, User, Category, PostCategory, sequelize } = require('../models');

const insertPost = async (userId, post) => {
  const t = await sequelize.transaction();
  const { title, content, categoryIds } = post;

  const result = await BlogPost.create(
    { title, content, userId },
    { transaction: t },
  );

  const { id: postId } = result.dataValues;
  const mapCategories = categoryIds.map((categoryId) => ({ postId, categoryId }));

  const result2 = await PostCategory.bulkCreate([
    ...mapCategories,
  ], { transaction: t });

  if (!result || !result2) await t.rollback();

  await t.commit();
  return result;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

const editPost = async (editInfo, id) => {
  const result = await BlogPost.update(editInfo, { where: { id } });

  return result;
};

module.exports = {
  getAllPosts,
  getById,
  insertPost,
  editPost,
};