'use strict';

var _ =		require('lodash');
var User =	require('../models/user');
var sha1 =	require('sha1');

var createUser = function(data){
	if (data.password)
	{
		data.password = sha1(data.password);
	}
	return new User(data);
};

exports.create	= function(rq, rs){
	var user = createUser(rq.body);

	user.save(function (err){
		if (err)
		{
			return rs.json(400, err);
		}

		rs.json(user);
	});
};

exports.token	= function(rq, rs){
	console.log('TOKEN');

	var res = null;
	User.findOne({
		username: rq.body.username//, password: require('sha1')(rq.body.password)
	},'username _id',function(err, user){
		if (err){
			rs.json(500, err);
		}
		if (!user) {
			return rs.send(404);
		}
		rs.json(user);
	});
};

exports.read	= function(rq, rs){
	User.findById(rq.param('id'), function(err, user){
		if (err){
			return rs.json(500, err);
		}
		if (!user) {
			return rs.send(404);
		}

		return rs.json(user);
	});
};

exports.update	= function(rq, rs){
	if (rq.body._id){
		delete rq.body._id;
	}

	User.findById(rq.param('id'), function (err, user){
		if (err){
			return rs.json(500, err);
		}

		if (!user){
			rs.send(404);
		}

		if (rq.body.password){
			sha1(rq.body.password);
		}

		var userUpdated = _.merge(user, rq.body);

		userUpdated.save(function (err){
			if (err) {
				return rs.json(422, err);
			}
			rs.json(userUpdated);
		});
	});

};