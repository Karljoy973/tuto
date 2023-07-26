const express = require('express');
const users_api = express.Router();
const users_controller = require('../../controller/users');

users_api.get('/', users_controller.get);

module.exports = users_api;
