const express = require('express');
const { blogPostController } = require('../controllers');
const authorizeToken = require('../middlewares/auth/authorizeToken');

const blogPostRoutes = express.Router();

blogPostRoutes.get('/', authorizeToken, blogPostController.getAllPosts);

module.exports = blogPostRoutes;