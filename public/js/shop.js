function shop_order()
{
	$.get( "/order",test)
}

function test(obj)
{
	console.log(obj);
	var a = obj['list_id_map'];
	var ul = document.getElementById("order");
	var st = obj['stores'];
	console.log(st);
	var st1 = st[0];
	var st2 = st1['lists']
	for(i=0;i<st2.length;i++)
	{
		var c = st2[i];
		//var d = c['lists'];
		if(c['num_id'] == a)
		{
			var e = c['ordered_items'];
			for(j=0;j<e.length;j++)
			{
				var item = document.createElement('li');
				item.appendChild(document.createTextNode(e[j]));
				ul.appendChild(item);
			}
		}
	}
}