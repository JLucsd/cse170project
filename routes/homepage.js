// Get all of our friend data
var time_data = require('../data.json');
var data = require('../store.json');
var store_id = 0;

exports.view = function(req, res){

	if(req.query.description > 0){
		var newFriend = JSON.parse('{ "name": "' +
			req.query.name+'", "description": "'+
			req.query.description+'", "imageURL": "'+'black');
		time_data["friends"].push(newFriend);
	}
	res.render('homepage',data);
	

	var title = req.query.title;
	var date = req.query.month + ","+req.query.date+" 2016";
	var items = req.query.item;
	 newList = {
				"id": "list3",
				"title":title,
				"date": date,	
				"items":items					
				};
	console.log(newList);

	var val = data['stores'];
	//for(i)
	var val2 = val[0];
	val2['lists'].push(newList);
};