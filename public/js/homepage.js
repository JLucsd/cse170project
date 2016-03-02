'use strict';
$(document).ready(function() {
		initializePage();
});

// Call this function when the page loads (the "ready" event)
function initializePage() {
	

	$('.edit').click(getID());

	function getID(){
		var listid = $(this).attr(id);
		console.log("hr");
	}


	$("#button_link").click(buttonClick);

	function buttonClick(){
		ga("send", "event", "testButtonImage", "click");
		console.log("Statistics Button button clicked!");
	}


	$("#option_link").click(option_buttonClick);

	function option_buttonClick(){
		ga("send", "event", "option_link", "click");
		console.log("Statistics option links clicked!");
	}
}