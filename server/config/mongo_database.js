var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var mongodbURL = 'mongodb://localhost/homygode';
var mongodbOptions = { };

mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
    if (err) { 
        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    } else {
        console.log('Connection successful to: ' + mongodbURL);
    }
});

var Schema = mongoose.Schema;

// User schema
var User = new Schema({
    username:       { type: String, required: true, unique: true },
    password:       { type: String, required: true },
    email:          { type: String },
    phone_number:   { type: String },
    created:        { type: Date, default: Date.now }
});

var Product = new Schema({
    name:       { type: String, required: true },
    category:   { type: String, required: true },
    region:     { type: String, required: true },
    price:      { type: Number },
    location:   { type: String },
    zip_code:   { type: String },
    descr:      { type: String },
    img1:       { type: String },
    img2:       { type: String },
    img3:       { type: String },
    user_id:    { type: String },
    created:    { type: Date, default: Date.now },
    updated:    { type: Date, default: Date.now },
});


// Bcrypt middleware on UserSchema
User.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

//Password verification
User.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(isMatch);
    });
};


//Define Models
var userModel = mongoose.model('User', User);
var productModel = mongoose.model('Product', Product);


// Export Models
exports.userModel = userModel;
exports.productModel = productModel;