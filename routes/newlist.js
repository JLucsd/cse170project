// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	console.log(req.query.id);
	
	res.render('newlist',data);
	var listid = req.query.id;
	
};