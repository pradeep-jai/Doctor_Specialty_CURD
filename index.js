/* load environment variables and DB connection*/
require('./config/config');
require('./model/db');

/* Grab our dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

/* Require index.router file */
const routerIndex = require('./routes/index.router');


var app = express();

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});


/* Middleware */
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api',routerIndex);

/* Server start */
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));