// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	var id = req.query.id_num;
	res.render('shop',data);
	data['list_id_map'] = id;

	console.log("from shop.js");
	console.log(id);
	console.log(data);
};