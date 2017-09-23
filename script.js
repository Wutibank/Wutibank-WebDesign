var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        769:{
            items:2,
            nav:false
        },
        1008:{
            items:4,
            loop:true,
        }
    }
});


        function openNav() {
            document.getElementById("myNav").style.height = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }
