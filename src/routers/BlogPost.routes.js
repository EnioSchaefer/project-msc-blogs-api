const express = require('express');
const { blogPostController } = require('../controllers');
const authorizeToken = require('../middlewares/auth/authorizeToken');
const validateCategoryIds = require('../middlewares/validateCategoryIds');
const validateEditingBody = require('../middlewares/validateEditingBody');
const validatePostBody = require('../middlewares/validatePostBody');
const validateUserEditing = require('../middlewares/validateUserEditing');

const blogPostRoutes = express.Router();

blogPostRoutes.get('/', authorizeToken, blogPostController.getAllPosts);
blogPostRoutes.get('/:id', authorizeToken, blogPostController.getPostById);
blogPostRoutes.post('/', authorizeToken, validatePostBody,
  validateCategoryIds, blogPostController.insertPost);
blogPostRoutes.put('/:id', authorizeToken, validateUserEditing,
  validateEditingBody, blogPostController.editPost);

module.exports = blogPostRoutes;