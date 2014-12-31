'use string';

var _		= require('lodash');

var defaults = {
	env: process.env.NODE_ENV || 'development',
	port : process.env.PORT || 9000
};

module.exports = _.merge(defaults, require('./'+defaults.env) || {});
