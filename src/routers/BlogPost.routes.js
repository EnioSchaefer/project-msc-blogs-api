const express = require('express');
const { blogPostController } = require('../controllers');
const authorizeToken = require('../middlewares/auth/authorizeToken');

const blogPostRoutes = express.Router();

blogPostRoutes.get('/', authorizeToken, blogPostController.getAllPosts);
blogPostRoutes.get('/:id', authorizeToken, blogPostController.getPostById);

module.exports = blogPostRoutes;