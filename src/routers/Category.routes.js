const express = require('express');
const { categoryController } = require('../controllers');
const authorizeToken = require('../middlewares/auth/authorizeToken');
const validateCategoryName = require('../middlewares/validateCategoryName');

const categoryRoutes = express.Router();

categoryRoutes.get('/', authorizeToken, categoryController.getAllCategories);
categoryRoutes.post('/', authorizeToken, validateCategoryName, categoryController.insertCategory);

module.exports = categoryRoutes;