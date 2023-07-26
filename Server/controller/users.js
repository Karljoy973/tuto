const users = require('../data');

const get = (req, res) => res.json(users);

module.exports = { get };
