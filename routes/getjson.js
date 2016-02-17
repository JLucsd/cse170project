var data = require('../data.json');

exports.view = function(req, res){
	
	//console.log(data);
	var rand = data["friends"];
	res.json(rand);
	//console.log(rand);
	/*for(i=0;i<rand.length;i++)
		{var name = rand[i];
	console.log(name["name"]);
	res.json(name["name"]);}*/
	//res.render('visualization',data);
};