$(document).ready(function(){

	// get rotation
	function getRotationDegrees(obj) {
	    var matrix = obj.css("-webkit-transform") ||
	    obj.css("-moz-transform")    ||
	    obj.css("-ms-transform")     ||
	    obj.css("-o-transform")      ||
	    obj.css("transform");
	    if(matrix !== 'none') {
	        var values = matrix.split('(')[1].split(')')[0].split(',');
	        var a = values[0];
	        var b = values[1];
	        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
	    } else { var angle = 0; }
	    return (angle < 0) ? angle + 360 : angle;
	}

	$(document).ready(function(){
	
	// get window width and height
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();


	$(document).click(function(e){
		xPos = e.pageX;
		yPos = e.pageY;
		
		$('letterbox div').css({
				'filter':"hue-rotate(" +(xPos*yPos)/1000+ "deg)",
				
			});
	});




});


