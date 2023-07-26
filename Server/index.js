const express = require('express');
const logger = require('./middleware/logger');
// eslint-disable-next-line no-unused-vars
const { urlencoded } = require('body-parser');

// call routes
const home_api = require('./routes/api/home');
const users_api = require('./routes/api/users');
const user_api = require('./routes/api/user');
//init express
const app = express();

//process.env.PORT ||
const PORT = 5000;

// use
//use body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);
app.use('/home', home_api);
app.use('/user', user_api);
app.use('/users', users_api);

//listen on port
app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`);
});
