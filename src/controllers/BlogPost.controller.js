const { blogPostService } = require('../services');

const insertPost = async (req, res) => {
  try {
    const { id } = req.userData;
    const post = req.body;

    const result = await blogPostService.insertPost(id, post);

    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await blogPostService.getAllPosts();

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await blogPostService.getById(id);

    if (!post) return (res.status(404).json({ message: 'Post does not exist' }));

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  insertPost,
};