$(document).ready(function(){

    $('.wedd-icon').owlCarousel({
        //nav:true,
      //  navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        autoplay:true,
        autoplayTimeout:2000,
        loop:true,
        // center:true,
        // animateOut:'slideOutDown',
        // animateIn:'flipInX',
        animateOut:'fadeOut',
        
        // items:2,
        // resposiveClass:true,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });


    $('.wedd-icon1').owlCarousel({
        
        autoplay:true,
        autoplayTimeout:2000,
        loop:true,
      
        animateOut:'fadeOut',
        
        // items:2,
        // resposiveClass:true,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });


    $('.wedd-icon2').owlCarousel({
        //nav:true,
    
        autoplay:true,
        autoplayTimeout:5000,
        loop:true,
        //center:true,
        // animateOut:'slideOutDown',
        // animateIn:'flipInX',
        animateOut:'fadeOut',
        
        responsive:{
            320:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
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


