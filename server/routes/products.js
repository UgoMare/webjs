var db = require('../config/mongo_database.js');
var publicFields = '_id name category region price location zip_code descr img1 img2 img3 created user_id';



exports.all = function(req, res) {
	var query = db.productModel.find();

	query.select(publicFields);
	query.sort('-created');
	query.exec(function(err, results) {
		if (err) {
  			console.log(err);
  			return res.send(400);
  		}
    	console.log(results);
  		return res.json(200, results);
	});
};

exports.get = function(req, res) {
	var id = req.params.id || '';
	if (id == '') {
		return res.send(400);
	}
	var query = db.productModel.findOne({_id: id});
	query.select(publicFields);
	query.exec(function(err, result) {
		if (err) {
  			console.log(err);
  			return res.send(400);
  		}

  		if (result != null) {
  			db.userModel.findOne({_id: result['user_id']}, function (err, user) {
  				product = {};
  				product['seller'] = user.username;
  				product['phone_number'] = user.phone_number;
  				product['email'] = user.email;
  				product['id'] = result._id;
				product['name'] = result.name;
				product['category'] = result.category;
				product['region'] = result.region;
				product['price'] = result.price;
				product['location'] = result.location;
				product['zip_code'] = result.zip_code;
				product['descr'] = result.descr;
				product['img1'] = result.img1;
				product['img2'] = result.img2;
				product['img3'] = result.img3;
				product['created'] = result.created;
				console.log(product);
				return res.json(200, product);
			});
		
  		} else {
  			return res.send(400);
  		}
	});
};

exports.create = function(req, res) {
	if (!req.user) {
		return res.send(401);
	}
	db.userModel.findOne({_id: req.user.id}, function (err, user) {
	
		var product = req.body.product;
		console.log(req.body);	
		if (product == null || product.name == null || product.category == null || product.region == null) {
			return res.send(400);
		}
		var productEntry = new db.productModel();
		productEntry.name 		= product.name;
		productEntry.category 	= product.category.name;
		productEntry.region 	= product.region.name;
		productEntry.price 		= product.price;
		productEntry.location 	= product.location;
		productEntry.zip_code 	= product.zip_code;
		productEntry.descr 		= product.descr;
		productEntry.img1 		= product.img1;
		productEntry.img2 		= product.img2;
		productEntry.img3 		= product.img3;
		productEntry.user_id 	= user.id;
		productEntry.save(function(err) {
			if (err) {
				console.log("error");
				console.log(err);
				return res.send(400);
			}
			return res.send(200);
		});
	});
}

exports.update = function(req, res) {
	if (!req.user) {
		return res.send(401);
	}
	db.productModel.findOne({_id: req.body.product.id ,user_id: req.user.id}, function (err, user) {
			if (err) {
  			console.log(err);
  			return res.send(400);
  		}
		var product = req.body.product;
		var updateProduct = {};
		console.log(req.body);	
		if (product == null || product.name == null || product.category == null || product.region == null) {
			return res.send(400);
		}
		product.updated = new Date();

		db.productModel.update({_id: product.id}, product, function(err, nbRows, raw) {
			console.log(product.name);
			if (err) {
  				console.log(err);
				return res.send(400);
  			}
			return res.send(200);
		});
	});
};

exports.delete = function(req, res) {
	if (!req.user) {
		return res.send(401);
	}

	var id = req.params.id;
	if (id == null || id == '') {
		res.send(400);
	} 

	var query = db.productModel.findOne({_id:id});

	query.exec(function(err, result) {
		if (err) {
			console.log(err);
			return res.send(400);
		}

		if (result != null) {
			result.remove();
			return res.send(200);
		}
		else {
			return res.send(400);
		}
		
	});
};

