$(document).ready(function(){

    $('#festCarousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                
                items:2
            },
            900:{
                items:2
            },
        }
    })
    $('#spiakerCarousel').owlCarousel({
        loop:true,
        margin:30,
        dots:true,
        responsive:{
            0:{
                items:2,
                margin:10
            },
            600:{
                items:4,
                margin:10,
            },
            900:{
                items:4,
                margin:10,
            }
        }
    })

});