'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema ({
	username:	{ type: String, required: true, trim: true},
	password:	{ type: String, required: true, select: false},
	createdAt:	{ type: Date, default: Date.now },
	updatedAt:	{ type: Date, default: Date.now }
});

userSchema.pre('save', function(next){
	this.updatedAt = new Date();

	next();
});

module.exports = mongoose.model('User', userSchema);