'use strict';

function edit()
{
	//console.log("asda");
	console.log(sid);
	console.log(id);
	$.get( "/editdata",test)
}

function test(resp)
{
	console.log(resp);
	//console.log(b);
	var i,j;
	for(i=0; i<resp.length; i++)
	{
		var obj = resp[i];
		if(obj["store_id"] == sid)
			{
				var lid = obj["lists"];
				for(j=0; j<lid.length; j++)
					{
						var lt = lid[j];
						if(lt["id"] == id)
						{
							var nl = lt["items"];
							console.log("okoko");
							console.log(nl);
							var arr = makeUL(nl);
							
						}
					}
			}
	}
}

function remove_item(id)
{
	var parent = document.getElementById('demoedit');
	//var child = document.getElementById(id);
	parent.removeChild(parent.childNodes[id]);
}	

function makeUL(array) {
    // Create the list element:
    var list = document.getElementById("demoedit");

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        var id = i;

        // Set its contents:
        item.setAttribute("id",'item'+id);
        item.appendChild(document.createTextNode(array[i]));
        
        var but = document.createElement('BUTTON');
        but.setAttribute("id",id);
        but.setAttribute("value","del");
        var t = document.createTextNode("delete");       // Create a text node
		but.appendChild(t); 		
        
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(but);

    }

    $(document.body).on('click', 'button', function() {
		    var parent = document.getElementById('demoedit');
			var item = document.getElementById('item'+this.id);
			console.log(this.id);
			//parent.removeChild(parent.childNodes[this.id]);
			var but = document.getElementById(this.id);
			if(this.value == "del")but.remove();
			item.remove();
		});

    // Finally, return the constructed list:
    return list;
}