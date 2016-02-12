// Get all of our friend data
var data = require('../ralphs-userlist.json');

exports.view = function(req, res){
	//console.log("hello");
	res.render('add',data);
	var title = req.query.title;
	var date = req.query.month + ","+req.query.date+" 2016";

	 newList = {
				"id": "list3",
				"title":title,
				"date": date,						
				};
	console.log(newList);

	data["lists"].push(newList);
	console.log(newList);
	
};