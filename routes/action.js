// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	
	res.render('action',data);
	
};