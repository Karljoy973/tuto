const uuid = require('uuid');
const users = [
    {
        id: uuid.v4(),
        uname: 'toto',
        pdw: 'pdw',
        email: 'toto@toto.com',
    },
    {
        id: uuid.v4(),
        uname: 'tata',
        pdw: 'pdw',
        email: 'tata@tata.com',
    },
];

module.exports = users;
