const express = require('express');
const { userController } = require('../controllers');
const { validateUserInsertionBody,
  validateUserInsertion } = require('../middlewares/validateUserInsertion');
const validateLoginBody = require('../middlewares/validateLoginBody');

const userRoutes = express.Router();

userRoutes.post('/login', validateLoginBody, userController.userLogin);
userRoutes.post('/user', validateUserInsertionBody,
  validateUserInsertion, userController.insertUser);

module.exports = userRoutes;