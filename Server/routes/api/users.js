const express = require("express");
const router = express.Router();
const uuid = require('uuid');
const users = require("../../data/index");


// à refacto plus tard
router.get("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if(!found){
        res.json({msg : `No User found with id ${req.params.id}`})
    }
    else {res.json(users.filter(user => user.id === parseInt(req.params.id)))}
    
})
router.get("/", (req, res) => res.json(users));

//create a user
router.post('/', (req, res) => {
    const newUser = {
        id : uuid.v4(),
        name : req.body.name,
        pwd : req.body.pwd,
        email : req.body.email,
        status : 'active'
    }
    if(!newUser.name || !newUser.pwd|| !newUser.email){
        res.status(400).json({msg: "Please include a name, a password and an email"})
    }
    else {
        users.push(newUser);
        res.json(users);
    }
    
});

router.put('/', (req, res) => {
    const user = req.body;
    users.forEach(u => {
        if(u.id === parseInt(req.params.id)){
            u.uname = user.name ? user.name : u.uname;
            u.pwd = user.pwd ? user.pwd : u.pwd;
            u.email = user.email ? user.email : u.email;
            res.json({
                msg : `
                user : ${user.uname} \n
                id : ${user.id} \n
                email : ${user.email} \n
                password : ${pwd} \n
                has been updated succesfully.
                `,
                user
            })
        }
    })
})

module.exports = router
