$("h1").hide();
$(".avatar").hide();
$(".purgatory").hide();
$("h1").fadeIn(3000);
$(".avatar").slideDown(3000);

$("h1").slideDown(3000);
$(".avatar").slideDown(3000);

 $(".button").click(function(){
    $(".button").hide(0);
    var avatarHover = "<img class='avatar-hover' src='images/avatar-bubble-hover.png'>"
    $(".intro").append(avatarHover);
    $(".avatar").css({visibility:"hidden"});
    $(".purgatory").show(500);
    $(".avatar-hover").animate({
        top:'110vh'
    });
    $('html, body').animate({
        scrollTop: $("#1").offset().top}, 800);
    setTimeout(function(){
        hideImage();
    },1200)
 });

 function hideImage(){
    $(".avatar-hover").css({visibility:"hidden"});
    var avatarFuneral = "<img class='avatar-hover' src='images/avatar-funeral.png'>"
    $(".intro").append(avatarFuneral);
 }