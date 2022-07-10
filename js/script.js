$(".toggle").click(function(){
    $('ul').slideToggle('fast',function(){
    })

})
    //  testimonial crowsel
    $('.t-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        autoplaySpeed: 500,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    //  banner carousel
    $('.b-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        autoplaySpeed: 500,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
   
   
