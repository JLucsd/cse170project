// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	var city_name = req.body.city;
	var store_name = req.body.store;
	console.log(city_name + " " + store_name);
	res.render('homepage_after_signup',{"store_name":store_name});
};