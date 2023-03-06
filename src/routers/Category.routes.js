const express = require('express');
const { categoryController } = require('../controllers');
const authorizeToken = require('../middlewares/auth/authorizeToken');

const categoryRoutes = express.Router();

categoryRoutes.get('/', authorizeToken, categoryController.getAllCategories);

module.exports = categoryRoutes;