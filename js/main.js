$(window).load(function() {
    var isColombia = false;
    setInterval(function() {
        $("#img1").fadeToggle();
        $("#img2").fadeToggle();
        if (isColombia) {
            $("body").css("background-image", "url('img/small-background_PSV.jpg')");
            isColombia = false;
        } else {
            $("body").css("background-image", "url('img/small-background_Colombia.jpg')");
            isColombia = true;
        }
    }, 3000);
})