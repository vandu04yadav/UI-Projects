
    $(document).ready(function(){
        $('.counter').counterUp({
            delay:10,
            Time:1000
        });

        $('.wedd-icon').owlCarousel({
            
            autoplay:true,
            autoplayTimeout:2000,
            loop:true,
           
            animateOut:'fadeOut',
    
            responsive:{
                320:{
                    items:1
                },
                768:{
                    items:1
                },
                992:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    });

        $(document).ready(function(){
            $('.numcount').counterUp({
                delay:1,
                time:1000
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


    
    
