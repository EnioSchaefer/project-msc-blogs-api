const express = require('express');
const { userController } = require('../controllers');
const { validateUserInsertionBody,
  validateUserInsertion } = require('../middlewares/validateUserInsertion');
const validateLoginBody = require('../middlewares/validateLoginBody');
const authorizeToken = require('../middlewares/auth/authorizeToken');
const validateUserId = require('../middlewares/validateUserId');
const validateUser = require('../middlewares/validateUser');

const userRoutes = express.Router();

userRoutes.get('/user', authorizeToken, userController.getAllUsers);
userRoutes.get('/user/:id', authorizeToken, validateUserId, userController.getUserById);
userRoutes.post('/user', validateUserInsertionBody,
  validateUserInsertion, userController.insertUser);
userRoutes.post('/login', validateLoginBody, userController.userLogin);
userRoutes.delete('/user/me', authorizeToken, validateUser, userController.deleteUser);

module.exports = userRoutes;