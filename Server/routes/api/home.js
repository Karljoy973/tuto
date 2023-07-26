const express = require('express');
const home_api = express.Router();
const home_controller = require('@controller/home');

home_api.get('/', home_controller);

module.exports = home_api;
