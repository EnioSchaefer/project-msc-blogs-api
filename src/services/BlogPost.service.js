const { BlogPost, User, Category } = require('../models');

// const insertPost = async (post) => {
//   const { title, content, categories } = post;
//   const result = await BlogPost.create({  });
// };

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  console.log(posts);
  return posts;
};

module.exports = {
  // insertPost,
  getAllPosts,
};