const express = require('express');
const { blogPostController } = require('../controllers');
const authorizeToken = require('../middlewares/auth/authorizeToken');
const validateCategoryIds = require('../middlewares/validateCategoryIds');
const validateEditingBody = require('../middlewares/validateEditingBody');
const validatePostBody = require('../middlewares/validatePostBody');
const validateUser = require('../middlewares/validateUser');

const blogPostRoutes = express.Router();

// blogPostRoutes.get('/search', authorizeToken, blogPostController.searchPost);
blogPostRoutes.get('/', authorizeToken, blogPostController.getAllPosts);
blogPostRoutes.get('/:id', authorizeToken, blogPostController.getPostById);
blogPostRoutes.post('/', authorizeToken, validatePostBody,
  validateCategoryIds, blogPostController.insertPost);
blogPostRoutes.put('/:id', authorizeToken, validateUser,
  validateEditingBody, blogPostController.editPost);
blogPostRoutes.delete('/:id', authorizeToken, validateUser, blogPostController.deletePost);

module.exports = blogPostRoutes;