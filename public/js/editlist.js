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
	console.log("Response from editlist\n")
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
						if(lt!=undefined){
						if(lt["id"] == id)
						{
							var nl = lt["items"];
							console.log("okoko");
							console.log(nl);
							if(nl[0] === ""){
								console.log("inside");
								no_item();
							}
							else{
							
								console.log("outside");
								var arr = makeUL(nl);
							}
						}
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

function no_item()
{
	document.getElementById("no_item").innerHTML = "Currently, there are no items in the list!!";
}

function makeUL(array) {
    // Create the list element:
    var list = document.getElementById("demoedit");

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        var id = i;
        var ch;
        // Set its contents:
        item.setAttribute("id",'item'+id);

        item.appendChild(document.createTextNode(array[i]));
        
        var but = document.createElement('BUTTON');
        but.setAttribute("id",id);
        but.style.cssText = ' float:right;color:#1ab188';
        item.style.cssText = ' padding-bottom:15px';
        but.setAttribute("value","del");
        var t = document.createTextNode("Delete");       // Create a text node
		but.appendChild(t); 		
        
        // Add it to the list:
        item.appendChild(but);
        list.appendChild(item);
        
        //list.appendChild('br/');

    }

    $(document.body).on('click', 'button', function() {
		    var parent = document.getElementById('demoedit');
			var item = document.getElementById('item'+this.id);
			console.log(this.id);
			//parent.removeChild(parent.childNodes[this.id]);
			var but = document.getElementById(this.id);
			if(this.value == "del"){but.remove();
			item.remove();}
		});

    // Finally, return the constructed list:
    return list;
}