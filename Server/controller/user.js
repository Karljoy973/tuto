const users = require('../data/index');

const get = (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));
    if (!found) {
        res.status(400).json(`No User found with id ${req.params.id}`);
    } else {
        res.json(users.filter((user) => user.id === parseInt(req.params.id)));
    }
};

const post = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        pwd: req.body.pwd,
        email: req.body.email,
        status: 'active',
    };
    if (!newUser.name || !newUser.pwd || !newUser.email) {
        res.status(400).json({
            msg: 'Please include a name, a password and an email',
        });
    } else {
        users.push(newUser);
        res.json(users);
    }
};

const put = (req, res) => {
    const user = req.body;
    users.forEach((u) => {
        if (u.id === parseInt(req.params.id)) {
            u.uname = user.name ? user.name : u.uname;
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
                user,
            });
        }
    });
};

module.exports = {
    get,
    post,
    put,
};
