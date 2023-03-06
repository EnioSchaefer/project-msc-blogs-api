const express = require('express');
const { userController } = require('../controllers');
const { validateUserInsertionBody,
  validateUserInsertion } = require('../middlewares/validateUserInsertion');
const validateLoginBody = require('../middlewares/validateLoginBody');
const authorizeToken = require('../middlewares/auth/authorizeToken');

const userRoutes = express.Router();

userRoutes.post('/login', validateLoginBody, userController.userLogin);
userRoutes.post('/user', validateUserInsertionBody,
  validateUserInsertion, userController.insertUser);
userRoutes.get('/user', authorizeToken, userController.getAllUsers);

module.exports = userRoutes;