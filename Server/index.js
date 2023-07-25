const express = require('express');
const logger = require('./middleware/logger');
const { urlencoded } = require('body-parser');

//init express
const app = express();

//process.env.PORT ||
const PORT = 5000;


// use
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);
app.use('/users/userdata', require('./routes/api/users'));
//body parser middleware


// getHome

app.get('/', (req, res) => {
    res.send('<i>hello dudu, !</i>');
});

//listen on port
app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`);
});
