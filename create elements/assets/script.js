$(document).ready(function(){

	// as long as n is less then 8, add a new div to the page
	for(var n = 1; n < 8; n++){

		// add a div to the page, and give it a unique class
		$('body').append('<div class="element-'+n+'">'+n+'</div>');

	}

});