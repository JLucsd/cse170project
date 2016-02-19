// Get all of our friend data
var time_data = require('../data.json');
var data = require('../store.json');
var store_id = 0;
var n = 3;
exports.view = function(req, res){

	if(req.query.description > 0){
		var newFriend = JSON.parse('{ "name": "' +
			req.query.name+'", "description": "'+
			req.query.description+'", "imageURL": "'+'http://lorempixel.com/500/500/people"}');
		time_data["friends"].push(newFriend);
	}
	res.render('homepage',data);
	

	var title = req.query.title;
	var date = req.query.month + ","+req.query.date+" 2016";
	var items = req.query.item;
	 newList = {
				"id": "list"+n,
				"title":title,
				"date": date,	
				"items":items					
				};
	console.log(newList);
	n=n+1;
	var val = data['stores'];
	//for(i)
	var val2 = val[0];
	val2['lists'].push(newList);
};