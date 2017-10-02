$(document).ready(function(){

	// random number function
	function randomNum(m,n) {

		//minumum number
		m = parseInt(m);

		//maximum number
		n = parseInt(n);

		// get a random number
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	}

	for(var n = 1; n < 8; n++){

		// get a random value between 1 and 255
		var red = randomNum(1, 255);

		// get a random value between 1 and 255
		var blue = randomNum(1, 255);

		// get a random value between 1 and 255
		var green = randomNum(1, 255);

		// using the style attribute get random RGB values when creating the element 
		$('body').append('<div class="element-'+n+'" style="background-color: rgb('+red+', '+blue+', '+green+'">'+n+'</div>');
	}


});