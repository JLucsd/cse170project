// Get all of our friend data
var data = require('../store.json');

exports.view = function(req, res){
	//console.log("hello");
	res.render('homepage',data);

	//obj = JSON.parse( data );
	
	var title = req.query.title;
	var date = req.query.month + ","+req.query.date+" 2016";

	 newList = {
	 	//"store-id":1,
		//"store-name":"Ralphs",
		//"store-info" : "General store info of Ralphs",
		//"logo" : " ",
		//"user-lists" :{
		//	"lists":[
		//		{
						"id": "list3",
						"title":title,
						"date": date,
					//	}
		//				]}
	};
	console.log(newList);

	data["stores"].push(newList);
	
};