'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


function initializePage() {
	$('#add-item').click(addItem);

}

function addItem(e) {
	// Prevent following the link
	e.preventDefault();
	$.get('/newlist',displayItem);

	function displayItem(result)
	{
		var item = $("#item-name").text();
		console.log(item);

		//var insertHTML = '<div class="thumbnail">'+'<a href="#">'+'<img src="'+ image+ '" class="detailsImage"/>'+ 
		//'<p>'+title+'</p></a>'+'<p><small>'+date+'</small></p><div class="details">'+summary+ '</div></div>';
		//console.log(projectID);
		//$('#'+projectID).html(insertHTML);
		
	}
}