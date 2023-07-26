const express = require('express');
const user_api = express.Router();
const controller = require('@controller/index');

//get a user
user_api.get('/:id', controller.user.get);

//create a user
user_api.post('/', controller.user.post);

//put a user
user_api.put('/', controller.user.put);

module.exports = user_api;
