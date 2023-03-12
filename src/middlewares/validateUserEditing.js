const { blogPostService } = require('../services');

const validateUserEditing = async (req, res, next) => {
  const { id: postID } = req.params;
  const { id: userId } = req.userData;

  const post = await blogPostService.getById(postID);
  if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });

  return next();
};

module.exports = validateUserEditing;