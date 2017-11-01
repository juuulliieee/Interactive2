$(document).ready(function(){

	// random number function
	function randomNum(m,n) {
		
		//minumum number
		m = parseInt(m);
		
		//maximum number
		n = parseInt(n);

		// get a random number
		return Math.floor(Math.random() * (n - m + 1) ) + m;

	}

	setInterval(swapImages,2000);

    function swapImages(){

		$('.letterbox .lineL1').each(function(){
				var current = parseInt($(this).css('transform').split(',')[5]);
				console.log(current);
				var rotate = randomNum(1, 20);
				$(this).css('transform', 'rotate('+rotate+'deg)');
		});

	}



});


