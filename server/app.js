var express = require('express');
var app = express();
var jwt = require('express-jwt');
var bodyParser = require('body-parser'); //bodyparser + json + urlencoder
var morgan  = require('morgan'); // logger
var tokenManager = require('./config/token_manager');
var secret = require('./config/secret');

app.listen(3001);
app.use(bodyParser());
app.use(morgan());

var routes = {};
routes.posts = require('./routes/products.js');
routes.users = require('./routes/users.js');