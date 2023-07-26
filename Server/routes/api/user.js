const express = require('express');
const user_api = express.Router();
const user_controller = require('../../controller/user');

//get a user
user_api.get('/:id', user_controller.get);

//create a user
user_api.post('/', user_controller.post);

//put a user
user_api.put('/', user_controller.put);

module.exports = user_api;
