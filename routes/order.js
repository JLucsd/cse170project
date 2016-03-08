var data = require('../store.json');

exports.view = function(req, res){
		
		res.json(data);
};