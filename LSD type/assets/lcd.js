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

    // rotate and vibrate type
    setInterval(rotateSegment,20);
    setInterval(rotateBG,1000);


    var i = 1;

    var click = 0;

    $('body').click(function(){
        
        click++; 
        if(click == 10) {
            click=0;
            $('.letterbox div').each(function(){
                $(this).css('height', '10px');
            });
        }
    });


    function rotateBG(){
        // get a random number between 5 and -5
        // var colors = ['#FFB6C1', '#7B68EE', '#F08080','#FF69B4','#00FF7F'];

        var randomColor = Math.floor(Math.random() * 5);

           
                    


        // $('body').css('background', colors[randomColor]);
    }

    function rotateSegment(){

        $('.letterbox div').each(function(){
                var current = getRotationDegrees($(this));
                //console.log(current);

                // get a random number between 5 and -5
                var colors = ['magenta', 'yellow', 'cyan'];
                var randomColor = Math.floor(Math.random() * 3);


                var colors3 = ['#f6d258', 'yellow', '#e4e005', '#fdd116'];
                var randomColor3 = Math.floor(Math.random() * 4);

                var colors4 = ['#8ed4cc', '#5cc6ba', '#00b099', '#02917f'];
                var randomColor4 = Math.floor(Math.random() * 4);

                var colors5 = ['#ef90b8', '#f361a8', '#d70282', '#b50068'];
                var randomColor5 = Math.floor(Math.random() * 4);

                var colors6 = ['#aadeec', '#00afe0', '#005684', '#0264a1'];
                var randomColor6 = Math.floor(Math.random() * 4);

                var colors7 = ['#fbced1', '#fa7681', '#ec3343', '#dd3c41'];
                var randomColor7 = Math.floor(Math.random() * 4);

                var colors8 = ['#def2e7', '#b2d9d6', '#009c7e', '#055144'];
                var randomColor8 = Math.floor(Math.random() * 4);


                
                var randomHeight = Math.floor(Math.random() * 10);
                var randomHeight2 = Math.floor(Math.random() * 100);
                var randomHeight3 = Math.floor(Math.random() * 300);
                var randomHeight4 = Math.floor(Math.random() * 500);


                
                var randomNumber = 10;

                if( i%2 == 1) {
                    var rotate = current + randomNumber;
                
                } else {
                    var rotate = current - randomNumber;    
                }
                i++;
                
                console.log(rotate);

                if(click > 0){
                    $(this).css('transform', 'rotate('+rotate+'deg)');
                }
                if(click > 1){
                    $(this).css('height', randomHeight+'px');
                }
                if(click > 2){
                    $(this).css({
                        
                        'background': colors[randomColor], 
                        'height': randomHeight2+'px'});

                }

                if(click > 3){
                    $(this).css({
                        
                        'background': colors3[randomColor3], 
                        'height': randomHeight3+'px'});

                }

                if(click > 4){
                    $(this).css({
                        
                        'background': colors4[randomColor4], 
                        'height': randomHeight2+'px'});

                }

                if(click > 5){
                    $(this).css({
                        
                        'background': colors5[randomColor5], 
                        'height': randomHeight+'px'});

                }

                if(click > 6){
                    $(this).css({
                        
                        'background': colors6[randomColor6], 
                        'height': randomHeight4+'px'});

                }


                if(click > 7){
                    $(this).css({
                        
                        'background': colors7[randomColor7], 
                        'height': randomHeight2+'px'});

                }


                if(click > 8){
                    $(this).css({
                        
                        'background': colors8[randomColor8], 
                        'height': randomHeight+'px'});

                }






        });



    }















});