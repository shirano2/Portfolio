$(function () {    
    var numberSlide;

    new fullpage('#fullpage', {
        anchors: ["homeAnc", "portfolioAnc","contactAnc"],
        menu: "#topMenu",
        autoScrolling:true,
        scrollHorizontally: true,
        scrollingSpeed:800,
        loopBottom:true
    });

    setTimeout(function () {
        $("#intro").slideUp("slow")
    }, 3500);

    setTimeout(function () {
        $("nav.navbar").toggleClass("hide").slideDown("slow");
    }, 4200);

    setTimeout(function () {
        $("#fullpage").toggleClass("hide").slideDown("slow");
    }, 4500);
    
    if($(window).width()>720) {
        numberSlide=3;
    } else {
        numberSlide=1;
    }

    $('#con1').width($(window).width()).height($(window).height());
    $('#con2').width($(window).width()).height($(window).height());
    $('#con3').width($(window).width()).height($(window).height());
    $('#con4').width($(window).width()).height($(window).height());

    $('.owl-carousel').owlCarousel({
        items:numberSlide,
        margin:10,
        loop:true,
        nav:true,
        navText:['Prev','Next'],					
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $('.owl-carousel').on('changed.owl.carousel', function(e) {
        if($(window).width()>720) {
            $("#topic").text($("div.owl-item.active:eq(2) img").data("name"));
            $("#site").attr("href",$("div.owl-item.active:eq(2) img").data("site"));
            $("#github").attr("href",$("div.owl-item.active:eq(2) img").data("hub"));
        } else {
            $("#topic").text($("div.owl-item.active").next("div").find("img").data("name"));
            $("#site").attr("href",$("div.owl-item.active").next("div").find("img").data("site"));
            $("#github").attr("href",$("div.owl-item.active").next("div").find("img").data("hub"));
        }
    });

    $("#phasechange, #cleaning").on("click", function(){
        $(this).attr("src",$(this).attr("src").replace(".jpg",".gif"));
    })

    $(window).resize(function () {
        location.reload();
    });
});