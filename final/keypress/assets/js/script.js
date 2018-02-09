$(document).ready(function(){
	
	$('body').click(function() {
		$('#desc').show();
		$('.aboutbox').show('');
		$('#red').css('opacity', 0);
		$('#orange').css('opacity', 0);
		$('#yellow').css('opacity', 0);
		$('#green').css('opacity', 0);
		$('#blue').css('opacity', 0);
		$('#navy').css('opacity', 0);
		$('#purple').css('opacity', 0);
		$('#red8').css('opacity', 0);

		$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','black');
	});

	$('body').keydown(function( e ) {
		
		$('#desc').hide();
		$('.aboutbox').hide('');
    	
    	if( e.keyCode == 67 ){ // # Some key code value
    		// alert('you pressed a');
			$('#red').css('opacity', 1);
			
			// $('#red').toggleClass('show');    		
			// //$('#red').css('opacity', '1');    		
			
			// if($('#red').hasClass('show') == true){
			// 	$('#cSound')[0].play();
			// } else {
			// 	$('#cSound')[0].stope();
			// }		
			$('#cSound')[0].play();
			
			$('#cSound')[0].currentTime=0;

			$('.keyC').css('background-color','red');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','black');
			


			// $('.keyD').fadeIn('');
    	} 

    	if( e.keyCode == 68 ){ // # Some key code value
    		// alert('you pressed a');
			$('#orange').css('opacity',1);
			// $('#orange').css('opacity', '1');  
			// $('#orange').toggleClass('show');    		
			// //$('#red').css('opacity', '1');    		
			
			// if($('#orange').hasClass('show') == true){
			// 	$('#dSound')[0].play();
			// } else {
			// 	$('#dSound')[0].stope();
			// }		

			$('#dSound')[0].play();
			$('#dSound')[0].currentTime=0;    	

			// $('.keyD').fadeOut('');
			// $('.keyE').fadeIn('');	
			$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','orange');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','black');
    	}


    	if( e.keyCode == 69 ){ // # Some key code value
    		// alert('you pressed a');
			$('#yellow').css('opacity', '1');    		
			//$('body').css('background-color', 'yellow'); 
			
			// $('#yellow').toggleClass('show');    		
			// //$('#red').css('opacity', '1');    		
			
			// if($('#yellow').hasClass('show') == true){
			// 	$('#eSound')[0].play();
			// } else {
			// 	$('#eSound')[0].stope();
			// }		
			$('#eSound')[0].play();
			$('#eSound')[0].currentTime=0;

			$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','yellow');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','black');
    	}

    	if( e.keyCode == 70 ){ // # Some key code value
    		// alert('you pressed a');
    		$('#green').css('opacity', '1'); 
			// $('body').css('background-color', 'green');
			// // 
			// $('#green').toggleClass('show');    	
			
			// if($('#green').hasClass('show') == true){
			// 	$('#fSound')[0].play();
			// } else {
			// 	$('#fSound')[0].stope();
			// }		
			$('#fSound')[0].play();
			$('#fSound')[0].currentTime=0; 

			// $('.keyF').fadeOut('');
			// $('.keyG').fadeIn('');   	
			$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','green');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','black');	
    	}

    	if( e.keyCode == 71 ){ // # Some key code value
    		// alert('you pressed a');
    		$('#blue').css('opacity', '1'); 
			// $('body').css('background-color', 'blue');
			// 
			// $('#blue').toggleClass('show');    		
			// //$('#red').css('opacity', '1');    		
			
			// if($('#blue').hasClass('show') == true){
			// 	$('#gSound')[0].play();
			// } else {
			// 	$('#gSound')[0].stope();
			// }		
			$('#gSound')[0].play();
			$('#gSound')[0].currentTime=0;   

			// $('.keyG').fadeOut('');
			// $('.keyA').fadeIn('');  
			$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','blue');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','black');	
 		 		
    	}

    	if( e.keyCode == 65 ){ // # Some key code value
    		// alert('you pressed a');
    		$('#navy').css('opacity', '1'); 
			// $('body').css('background-color', 'navy');
			// $('#aSound')[0].play();

			// $('#navy').toggleClass('show');    			
			
			// if($('#navy').hasClass('show') == true){
			// 	$('#aSound')[0].play();
			// } else {
			// 	$('#aSound')[0].stope();
			// }		
			$('#aSound')[0].play();
			$('#aSound')[0].currentTime=0;    	

			// $('.keyA').fadeOut('');
			// $('.keyB').fadeIn('');   
			$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','navy');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','black');			 			
    	}

    	if( e.keyCode == 66 ){ // # Some key code value
    		// alert('you pressed a');
    		$('#purple').css('opacity', '1'); 
			// $('body').css('background-color', 'purple');
			// 

			// $('#purple').toggleClass('show');    		
				
			
			// if($('#purple').hasClass('show') == true){
			// 	$('#bSound')[0].play();
			// } else {
			// 	$('#bSound')[0].stope();
			// }		
			$('#bSound')[0].play();
			$('#bSound')[0].currentTime=0;   		

			// $('.keyB').fadeOut('');
			// $('.key8').fadeIn('');
			$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','purple');
			$('.key8').css('background-color','black');	
    	}

    	if( e.keyCode == 56 ){ // # Some key code value
    		// alert('you pressed a');
			// $('body').css('background-color', 'red');
			$('#red8').css('opacity', '1'); 
			$('#c2Sound')[0].play();
			// $('#red8').toggleClass('show');    		
				
			
			// if($('#red8').hasClass('show') == true){
			// 	$('#c2Sound')[0].play();
			// } else {
			// 	$('#c2Sound')[0].stope();
			// }		

			$('#c2Sound')[0].currentTime=0;  
			$('.keyC').css('background-color','black');
			$('.keyD').css('background-color','black');
			$('.keyE').css('background-color','black');
			$('.keyF').css('background-color','black');
			$('.keyG').css('background-color','black');
			$('.keyA').css('background-color','black');
			$('.keyB').css('background-color','black');
			$('.key8').css('background-color','red');	 

			// $('.key8').fadeOut('');
			
    	}

	});

	// $('body').keyup(function( e ) {
	// 	alert('hi');
	// });

});