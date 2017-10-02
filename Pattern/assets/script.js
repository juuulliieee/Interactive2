$(document).ready(function(){
	
	// get window width and height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();


	$(document).click(function(e){
		xPos = e.pageX;
		yPos = e.pageY;
		
		$('body').css({
				'filter':"hue-rotate(" +(xPos*yPos)/1000+ "deg)",
				
			});
	});
	$(document).mousemove(function(){
		
		
		// random number function
		function randomNum(m,n) {
			
			//minumum number
			m = parseInt(m);
			
			//maximum number
			n = parseInt(n);

			// get a random number
			return Math.floor(Math.random() * (n - m + 1) ) + m;

		}


		for(var n = 1; n < 2; n++){

			// get a random yPos between 1 and the window width
			var xPos = randomNum(1, windowWidth);

			// get a random xPos between 1 and the window height
			var yPos = randomNum(1, windowHeight);

			var RGB1 = randomNum(1, 256);
			var RGB2 = randomNum(1, 256);
			var RGB3 = randomNum(1, 256);

			var cirSiz = randomNum(1, 300);

			// using the style attribute randomly place the div within the window
			$('.container3').append('<div class="element-'+n+'" style="left: '+xPos+'px; top: '+yPos+'px; background: rgb(' + RGB1 + ', ' + RGB2 + ', ' + RGB3 + '); width:'+cirSiz+'px; height:'+cirSiz+'px; opacity:0.4; transition: all 2s;"></div>');
			
		}
	});	

	var scrollPos;
	var xPos;
	var yPos;
	var winWidth;
	var winHeight;


	


	// check when the mouse moves
	$(document).mousemove(function(e){
		
		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;

		

		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);
		
		$('.big1').css({
			'transform' : 'translateX(' + xPos/1 + 'px)',
			'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)	/10 + ')',
		});

		$('.big2').css({
			'transform' : 'translateX(-' + xPos/1 + 'px)',
			'background-color' : 'rgb('+ xPos/3 + ', ' + yPos/5 + ', ' + (xPos*yPos)	/4 + ')',
		});		

		if(xPos > 400){
			

			$('#color').css({
				'opacity':.5,
				'width':"300px",
				'height':"300px",
			});
			

		}

		if(xPos > 600){
			$('#color2').css({
				'left': randPosX + 'px',
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			});
		}

		if(xPos > 800){
			$('#color3').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 300){
			$('#color4').animate({
				'opacity':.5,
				'width':"300px",
				'height':"300px",
			},0.0001);
		}

		if(xPos > 700){
			$('#color5').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 900){
			$('#color6').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 500){
			$('#color7').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 800){
			$('#color8').animate({
				'opacity':.5,
				'width':"100px",
				'height':"100px",
			},0.0001);
		}

		if(xPos > 400){
			$('#color9').animate({
				'opacity':.5,
				'width':"150px",
				'height':"150px",
			},0.0001);
		}

		if(xPos > 600){
			$('#color10').animate({
				'opacity':.5,
				'width':"100px",
				'height':"100px",
			},0.0001);
		}

		if(xPos > 300){
			$('#color11').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 450){
			$('#color12').animate({
				'opacity':.5,
				'width':"100px",
				'height':"100px",
			},0.0001);
		}

		if(xPos > 550){
			$('#color13').animate({
				'opacity':.5,
				'width':"120px",
				'height':"120px",
			},0.0001);
		}

		if(xPos > 620){
			$('#color14').animate({
				'opacity':.5,
				'width':"80px",
				'height':"80px",
			},0.0001);
		}

		if(xPos > 420){
			$('#color15').animate({
				'opacity':.5,
				'width':"150px",
				'height':"150px",
			},0.0001);
		}

		if(xPos > 240){
			$('#color16').animate({
				'opacity':.5,
				'width':"180px",
				'height':"180px",
			},0.0001);
		}

		if(xPos > 320){
			$('#color17').animate({
				'opacity':.5,
				'width':"190px",
				'height':"190px",
			},0.0001);
		}

		if(xPos > 440){
			$('#color18').animate({
				'opacity':.5,
				'width':"300px",
				'height':"300px",
			},0.0001);
		}

		if(xPos > 350){
			$('#color19').animate({
				'opacity':.5,
				'width':"160px",
				'height':"160px",
			},0.0001);
		}

		if(xPos > 330){
			$('#color20').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 380){
			$('#color21').animate({
				'opacity':.5,
				'width':"160px",
				'height':"160px",
			},0.0001);
		}

		if(xPos > 180){
			$('#color22').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 330){
			$('#color23').animate({
				'opacity':.5,
				'width':"150px",
				'height':"150px",
			},0.0001);
		}

		if(xPos > 320){
			$('#color24').animate({
				'opacity':.5,
				'width':"80px",
				'height':"80px",
			},0.0001);
		}

		if(xPos > 220){
			$('#color25').animate({
				'opacity':.5,
				'width':"170px",
				'height':"170px",
			},0.0001);
		}

		if(xPos > 300){
			$('#color26').animate({
				'opacity':.5,
				'width':"140px",
				'height':"140px",
			},0.0001);
		}

		if(xPos > 500){
			$('#color27').animate({
				'opacity':.5,
				'width':"180px",
				'height':"180px",
			},0.0001);
		}

		if(xPos > 300){
			$('#color28').animate({
				'opacity':.5,
				'width':"150px",
				'height':"150px",
			},0.0001);
		}

		if(xPos > 280){
			$('#color29').animate({
				'opacity':.5,
				'width':"100px",
				'height':"100px",
			},0.0001);
		}

		if(xPos > 420){
			$('#color30').animate({
				'opacity':.5,
				'width':"190px",
				'height':"190px",
			},0.0001);
		}

		if(xPos > 600){
			$('#color31').animate({
				'opacity':.5,
				'width':"160px",
				'height':"160px",
			},0.0001);
		}

		if(xPos > 300){
			$('#color32').animate({
				'opacity':.5,
				'width':"90px",
				'height':"90px",
			},0.0001);
		}

		if(xPos > 180){
			$('#color33').animate({
				'opacity':.5,
				'width':"170px",
				'height':"170px",
			},0.0001);
		}

		if(xPos > 390){
			$('#color34').animate({
				'opacity':.5,
				'width':"140px",
				'height':"140px",
			},0.0001);
		}

		if(xPos > 360){
			$('#color35').animate({
				'opacity':.5,
				'width':"140px",
				'height':"140px",
			},0.0001);
		}

		if(xPos > 700){
			$('#color36').animate({
				'opacity':.5,
				'width':"200px",
				'height':"200px",
			},0.0001);
		}

		if(xPos > 660){
			$('#color37').animate({
				'opacity':.5,
				'width':"180px",
				'height':"180px",
			},0.0001);
		}

		if(xPos > 670){
			$('#color38').animate({
				'opacity':.5,
				'width':"150px",
				'height':"150px",
			},0.0001);
		}

		if(xPos > 370){
			$('#color39').animate({
				'opacity':.5,
				'width':"120px",
				'height':"120px",
			},0.0001);
		}

		if(xPos > 440){
			$('#color40').animate({
				'opacity':.5,
				'width':"120px",
				'height':"120px",
			},0.0001);
		}

		if(xPos > 760){
			$('#color41').animate({
				'opacity':.5,
				'width':"180px",
				'height':"180px",
			},0.0001);
		}


		// $('#color42').css({
		// 	'transform': 'scale('+ xPos/100 + ')'
		// 	+ 'translateX(' + xPos/10 + 'px)'
		// 	+ 'translatey(' + yPos/10 + 'px)'
		// 	,
		// 	'opacity': 0 + yPos/1000,
			
		// });
		




		// if(xPos > 300){
		// 	$('#color2').addClass('show');
		// }	

		// if(xPos > 200){
		// 	$('#color3').addClass('show');
		// }	

		// if(xPos > 100){
		// 	$('#color4').addClass('show');
		// }	

		// if(xPos > 90){
		// 	$('#color5').addClass('show');
		// }

		// if(xPos > 50){
		// 	$('#color6').addClass('show');
		// }

		// if(xPos > 80){
		// 	$('#color7').addClass('show');
		// }

		// if(xPos > 300){
		// 	$('#color8').addClass('show');
		// }

		// if(xPos > 400){
		// 	$('#color9').addClass('show');
		// }

		// if(xPos > 500){
		// 	$('#color10').addClass('show');
		// }

		// if(xPos > 600){
		// 	$('#color11').addClass('show');
		// }

		// if(xPos > 40){
		// 	$('#color12').addClass('show');
		// }

		// if(xPos > 200){
		// 	$('#color13').addClass('show');
		// }

		// if(xPos > 100){
		// 	$('#color14').addClass('show');
		// }

		// if(xPos > 150){
		// 	$('#color15').addClass('show');
		// }

		// if(xPos > 180){
		// 	$('#color16').addClass('show');
		// }

		// if(xPos > 220){
		// 	$('#color17').addClass('show');
		// }

		// if(xPos > 260){
		// 	$('#color18').addClass('show');
		// }

		// if(xPos > 550){
		// 	$('#color19').addClass('show');
		// }

		// if(xPos > 320){
		// 	$('#color20').addClass('show');
		// }

		// if(xPos > 380){
		// 	$('#color21').addClass('show');
		// }

		// if(xPos > 450){
		// 	$('#color22').addClass('show');
		// }

		// if(xPos > 450){
		// 	$('#color23').addClass('show');
		// }

		// if(xPos > 520){
		// 	$('#color24').addClass('show');
		// }

		// if(xPos > 510){
		// 	$('#color25').addClass('show');
		// }

		// if(xPos > 470){
		// 	$('#color26').addClass('show');
		// }

		// if(xPos > 430){
		// 	$('#color27').addClass('show');
		// }

		// if(xPos > 280){
		// 	$('#color28').addClass('show');
		// }

		// if(xPos > 400){
		// 	$('#color29').addClass('show');
		// }

		// if(xPos > 360){
		// 	$('#color30').addClass('show');
		// }

		// if(xPos > 400){
		// 	$('#color31').addClass('show');
		// }

		// if(xPos > 520){
		// 	$('#color32').addClass('show');
		// }

		// if(xPos > 330){
		// 	$('#color33').addClass('show');
		// }

		// if(xPos > 250){
		// 	$('#color34').addClass('show');
		// }

		// if(xPos > 330){
		// 	$('#color35').addClass('show');
		// }

		// if(xPos > 450){
		// 	$('#color36').addClass('show');
		// }

		// if(xPos > 320){
		// 	$('#color37').addClass('show');
		// }

	});


	// check when the user clicks
	

	// check when the window is resized
	$(window).resize(function() {

		// update the webpage with the window dimensions
		winWidth = $(window).width();	
		winHeight = $(window).height();
		$('#window-size').html('window width: ' + winWidth + '<br />window height: ' + winHeight);
	});


});