var data = require('../store.json');

exports.view = function(req, res){
	/*var id = req.query.id;
	var sid = req.query.store-id;
	//res.render('editlist',data);
	for (i=0; i<data.length; i++)
		
	
		var st_data = data["stores"];
		var check = st_data[0];
		if(check["store-id"] == sid)
			console.log(check["store-id"]);*/
	
		res.json(data["stores"]);
};