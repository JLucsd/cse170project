// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	//console.log("hello");
	res.render('add',data);
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
	var val2 = val[0];
	val2['lists'].push(newList);
	
};