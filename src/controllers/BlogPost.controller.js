const { blogPostService } = require('../services');

const getAllPosts = async (req, res) => {
  try {
    const posts = await blogPostService.getAllPosts();

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllPosts,
};