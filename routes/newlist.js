// Get all of our friend data


exports.view = function(req, res){
	console.log(req.query.id);
	res.render('newlist');
	var listid = req.query.id;
	
};