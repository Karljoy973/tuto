const express = require('express');
const users_api = express.Router();

const users = require('../../data/index');

// à refacto plus tard
users_api.get('/', (req, res) => res.json(users));

module.exports = users_api;
