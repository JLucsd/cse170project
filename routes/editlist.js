var data = require('../ralphs-userlist.json');

exports.view = function(req, res){
	var id = req.query.id;
	res.render('editlist',data);
	
	for(var key in data){
		if(data["lists"].id == id)
			console.log(data["lists"].title);
	}
};