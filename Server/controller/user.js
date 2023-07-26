const users = require('../data/index');

const GET = (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));
    if (!found) {
        res.status(400).json(`No User found with id ${req.params.id}`);
    } else {
        res.json(users.filter((user) => user.id === parseInt(req.params.id)));
    }
};

const POST = (req, res) => {
    const newUser = {
        id: users.length + 1,
        uname: req.body.uname,
        pwd: req.body.pwd,
        email: req.body.email,
    };
    if (!newUser.uname || !newUser.pwd || !newUser.email) {
        res.status(400).json({
            msg: 'Please include a name, a password and an email',
        });
    } else {
        users.push(newUser);
        res.json(users);
    }
};

const PUT = (req, res) => {
    const user = req.body;
    users.forEach((u) => {
        if (u.id === parseInt(req.params.id)) {
            u.uname = user.uname ? user.uname : u.uname;
            u.pwd = user.pwd ? user.pwd : u.pwd;
            u.email = user.email ? user.email : u.email;
            res.json({
                msg: `
                user : ${user.uname} \n
                id : ${user.id} \n
                email : ${user.email} \n
                password : ${user.pwd} \n
                has been updated succesfully.
                `,
                users,
            });
        }
    });
};
const DELETE = (req, res) => {
    const update = users.filter((user) => user.id !== parseInt(req.params.id));
    res.json({
        msg: 'member deleted',
        update,
    });
};

module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
};
