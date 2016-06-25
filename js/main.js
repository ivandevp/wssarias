function getImageSize(img, callback){
    img = $(img);

    var wait = setInterval(function(){        
        var w = img.width(),
            h = img.height();

        if(w && h){
            done(w, h);
        }
    }, 0);

    var onLoad;
    img.on('load', onLoad = function(){
        done(img.width(), img.height());
    });


    var isDone = false;
    function done(){
        if(isDone){
            return;
        }
        isDone = true;
        img.show();

        clearInterval(wait);
        img.off('load', onLoad);

        callback.apply(this, arguments);
    }
}


function App() {

            im.removeClass('ww wh');

            var th = $(window).height(),
                tw = $(window).width(),
                ih = im.height(),
                iw = im.width();

            if (ih<=th) {
                im.addClass('wh');
            }else{
                im.addClass('ww');
            }
           
           console.log("th", th);
            var nh = im.height(),
                nw = im.width(),
                hd =  Math.floor((nh-th)/2),
                ntw = Math.floor((nw-tw)/2),
                wd =  (tw <= 800) ? Math.floor(ntw*180/100) : nw-th,
                gutter = (tw <= 800) ? Math.floor((2*nh)/100) : Math.floor((4*nh)/100);

                //console.log(hd);

            if (im.hasClass('wh')) {
                console.log(wd);
                im.css('marginLeft', '-'+wd+'px');
            }else{
                im.css('margin', '0');
            }

            $('#content').css({
                top: Math.floor((23*nh)/100),
                height: Math.floor((13*nh)/100)
            });

            console.log($('.content-social').css('width'));

            

            getImageSize($('#number').children(), function(width, height){

                $('#number').css({
                    height: Math.floor((30*nh)/100),
                    bottom: gutter,
                    right: gutter
                });

                $('#number').children().css('height', $('#number').height());

            });

            getImageSize($('#logos').children(), function(width, height){

                $('#logos').css({
                    height:  Math.floor((7*nh)/100) ,
                    //height: (tw <= 800) ? Math.floor((5*nh)/100) : Math.floor((7*nh)/100) ,
                    bottom: gutter
                });

                $('#logos').children().css('height', $('#logos').height());

            });

/*
            $('img').each(function(index, el) {
                $(el).css('width', 'auto');
            });
*/
    }

var im = $('#bg');     

$(function(){

    getImageSize(im, function(width, height){
        App();
        $('#main').css('opacity', '1');
    });

});


$(window).resize(function(event) {
	/* Act on the event */
    //console.log('resize');
    App();

    $('.content-social img').css('width', '');

    $('.content-social a').each(function(index, el) {
     $(this).css('width', $(this).children().width());
    });


});


// Listen for orientation changes      
window.addEventListener("orientationchange", function() {
    //console.log('orientationchange');
    App();

    $('.content-social img').css('width', '');

    $('.content-social a').each(function(index, el) {
     $(this).css('width', $(this).children().width());
    });


}, false);

