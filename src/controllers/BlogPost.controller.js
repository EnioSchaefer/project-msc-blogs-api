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

const editPost = async (req, res) => {
  try {
    const editInfo = req.body;
    const { id } = req.params;

    const result = await blogPostService.editPost(editInfo, id);
    if (!result) return null;

    const editedPost = await blogPostService.getById(id);

    return res.status(200).json(editedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await blogPostService.deletePost(id);
    if (result === 0) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(204).end();
  } catch (err) {
    return res.status(500).json(err);
  }
};

// const searchPost = async (req, res) => {
//   try {
//     const { q } = req.query;

//     const query = q ? `%${q}$` : '%%';

//     const result = await blogPostService.searchPost(query);

//     return res.status(200).json(result);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// };

module.exports = {
  getAllPosts,
  getPostById,
  insertPost,
  editPost,
  deletePost,
  // searchPost,
};