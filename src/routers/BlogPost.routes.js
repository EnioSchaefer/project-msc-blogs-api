const express = require('express');
const { blogPostController } = require('../controllers');
const authorizeToken = require('../middlewares/auth/authorizeToken');
const validateCategoryIds = require('../middlewares/validateCategoryIds');
const validatePostBody = require('../middlewares/validatePostBody');

const blogPostRoutes = express.Router();

blogPostRoutes.get('/', authorizeToken, blogPostController.getAllPosts);
blogPostRoutes.get('/:id', authorizeToken, blogPostController.getPostById);
blogPostRoutes.post('/', authorizeToken, validatePostBody,
  validateCategoryIds, blogPostController.insertPost);

module.exports = blogPostRoutes;