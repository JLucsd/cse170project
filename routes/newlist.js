// Get all of our friend data
var data = require('../ralphs-userlist.json');

exports.view = function(req, res){
	console.log(req.query.id);
	res.render('newlist');
	var listid = req.query.id;
	
};