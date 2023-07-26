const users = require('@data/index.js');

const get = (req, res) => res.json(users);

module.exports = get;
