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
	//console.log(resp);
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
							console.log(nl);
							var arr = makeUL(nl);
							
						}
					}
			}
	}
}
function makeUL(array) {
    // Create the list element:
    var list = document.getElementById("demoedit");

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}