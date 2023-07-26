const users = require('../data/index');
const get = (req, res) => res.json(users);

module.exports = get;
