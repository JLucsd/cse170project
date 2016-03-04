var data = require('../store.json');

exports.view = function(req, res){
	
	var id = req.query.id;
	console.log(id);
	var sid = req.query.store_id;
	data["sid"] = sid;
	data["id"] = id;
	
	//res.send(id,sid);
	console.log(data);
	console.log(req.query.item);																										
	/*if(req.query.item != undefined){		
		var items = req.query.item;
		console.log("Items=" + items);
		 newList = {
					
					"items":items,
								
					};
		
		n=n+1;
		var val = data['stores'];
		//for(i)
		var val2 = val[0];
		val2['lists'].push(newList);
		console.log("new json= " + data);
		}*/
	res.render('editlist',data);	
	
};