const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const index = require('./routes/index.js');

const PORT = 3000;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', index);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
