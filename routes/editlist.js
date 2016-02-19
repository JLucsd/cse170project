var data = require('../store.json');

exports.view = function(req, res){
	
	var id = req.query.id;
	console.log(id);
	var sid = req.query.store_id;
	data["sid"] = sid;
	data["id"] = id;
	//res.send(id,sid);
	console.log(data);
	res.render('editlist',data);
	
	
};