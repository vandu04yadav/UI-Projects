$(document).ready(function(){
    $('.my-slider').owlCarousel({
        // nav:true,
       autoplayTimeout:4000,
        responsiveClass:true,
        margin:5,
        loop:true,
       items:1,           
       autoplay:true,
       animateOut: 'slideOutDown',
       animateIn: 'flipInX',
    });




$('.numcount').counterUp({
    delay:1,
    time:1000
});

$(".xyz").click(function(){
    $(".xyz-con").slideDown();
    $(".pqr-con").slideUp();
    $(".srt-con").slideUp();

});

$(".pqr").click(function(){
    $(".pqr-con").slideDown();
    $(".srt-con").slideUp();
    $(".xyz-con").slideUp();


});

$(".srt").click(function(){
    $(".srt-con").slideDown();
    $(".pqr-con").slideUp();
    $(".xyz-con").slideUp();

});

var a=1;
$(".hamburger").click(function(){
$(".menubar-ham").slideDown();
if (a==1){
    $(".menubar-ham").slideDown();
    a++;
}
else{
    $(".menubar-ham").slideUp();
    a=1;
}

});
AOS.init();

});

