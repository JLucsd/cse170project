// Get all of our friend data
var data = require('../ralphs-userlist.json');

exports.view = function(req, res){
	res.render('homepage',data);
	console.log(data);
};