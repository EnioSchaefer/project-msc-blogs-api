const express = require('express');
const { userController } = require('../controllers');

const userRoutes = express.Router();

userRoutes.post('/login', userController.userLogin);

module.exports = userRoutes;