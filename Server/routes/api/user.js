const express = require('express');
const user_api = express.Router();
const controller = require('../../controller/index');

//get a user
user_api.get('/:id', controller.user.GET);

//create a user
user_api.post('/', controller.user.POST);

//put a user
user_api.put('/:id', controller.user.PUT);

user_api.delete('/:id', controller.user.DELETE);

module.exports = user_api;
