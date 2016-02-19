// Get all of our friend data
var time_data = require('../data.json');
var data = require('../store.json');
var store_id = 0;

exports.view = function(req, res){
	

	if(req.query.description > 0){
		var newFriend = JSON.parse('{ "name": "' +
			req.query.name+'", "description": "'+
			req.query.description+'", "imageURL": "'+'http://lorempixel.com/500/500/people"}');
		time_data["friends"].push(newFriend);
	}
	res.render('homepage',data,store_id);
	
};