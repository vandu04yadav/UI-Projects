$(document).ready(function(){
  
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
