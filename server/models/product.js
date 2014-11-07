'use strict';

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema ({
	name:		{ type: String, required: true, trim: true},
	descr: 		{ type: Text },
	category: 	{ type: Number, required: true }
	userId: 	{ type: Number, required: true }
	password:	{ type: String, required: true, select: false},
	createdAt:	{ type: Date, default: Date.now },
	updatedAt:	{ type: Date, default: Date.now }
});

productSchema.pre('save', function(next){
	this.updatedAt = new Date();

	next();
});

module.exports = mongoose.model('Product', productSchema);