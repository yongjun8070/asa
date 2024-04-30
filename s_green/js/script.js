$(".nav>li").mouseover(function () {
    $(".submenu, .subback").stop().slideDown(400);
});
$(".nav>li, .subback").mouseleave(function () {
    $(".submenu, .subback").stop().slideUp(100);
});

setInterval(function () {
    $(".imageslide").delay(2300);
    $(".imageslide").animate({ marginLeft: "-1200px" }, 700);
    $(".imageslide").delay(2300);
    $(".imageslide").animate({ marginLeft: "-2400px" }, 700);
    $(".imageslide").delay(2300);
    $(".imageslide").animate({ marginLeft: "0px" }, 700);
});

$(".onClick").click(function () {
    $("#modal").show();
});
$("#modalcontent").click(function () {
    $("#modal").hide();
});