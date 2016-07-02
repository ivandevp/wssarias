$(window).load(function() {
    var isColombia = false;
    setInterval(function() {
        $("#img1").fadeToggle(1000);
        $("#img2").fadeToggle(1000);
        if (isColombia) {
            $("body").css({
                "background-image": "url('img/small-background_PSV.jpg')",
                "transition": "opacity 1s ease-in-out"
            });
            isColombia = false;
        } else {
            $("body").css({
                "background-image": "url('img/small-background_Colombia.jpg')",
                "transition": "opacity 1s ease-in-out"
            });
            isColombia = true;
        }
    }, 3000);
})