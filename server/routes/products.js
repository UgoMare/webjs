var db = require('../config/mongo_database.js');
var publicFields = '_id name category region price location zip_code descr img1 img2 img3 created';



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
