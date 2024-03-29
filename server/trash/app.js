'use strict';

var express		= require('express');
var mongoose	= require('mongoose');
var config		= require('./config/environment');

mongoose.set('debug', true);
mongoose.connect(config.mongo.url);

var app = express();

require('./config/routes')(app);
app.listen(config.port);

console.log('Server is running');

module.exports = app;