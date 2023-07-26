const express = require('express');
const logger = require('@middle/logger');
// eslint-disable-next-line no-unused-vars
const { urlencoded } = require('body-parser');

// call api routes
const api = require('@api/index');
//init express
const app = express();

//process.env.PORT ||
const PORT = 5000;

// use
//use body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);
app.use('/home', api.home_api);
app.use('/user', api.user_api);
app.use('/users', api.users_api);

//listen on port
app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`);
});
