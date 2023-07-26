const express = require('express');
const users_api = express.Router();
const controller = require('@controller/index');

users_api.get('/', controller.users.get);

module.exports = users_api;
