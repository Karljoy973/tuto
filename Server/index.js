const express = require("express");
const logger = require("./middleware/logger");
const users = require("./data/index");

//init express 
const app = express();

PORT = process.env.PORT || 5000 
//Create Middlewares

// use 
app.use(logger)


//Create routes 

// getHome
app.get("/", (req, res) => {res.send("<i>hello dudu, !</i>");});

/*
*get users data
**/
// get all users data
app.get("/data/userdata", (req, res) => res.json(users));
//get one user data 
app.get("/data/userdata/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if(!found){
        res.json({msg : `No User found with id ${req.params.id}`})
    }
    else {res.json(users.filter(user => user.id === parseInt(req.params.id)))}
    
})




//listen on port 
app.listen(PORT, () => {console.log(`Server started on port : ${PORT}`)}); 