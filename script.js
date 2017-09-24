
        function openNav() {
            document.getElementById("myNav").style.height = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }

 //menu on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 300) { // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200); // Fade in the arrow
                $('#menu-item').fadeIn(200); // Fade in the arrow
                $('#menu-item-project').fadeIn(200); 
            } else {
                $('#return-to-top').fadeOut(200); // Else fade out the arrow
                $('#menu-item').fadeOut(200); // Else fade out the arrow
                $('#menu-item-project').fadeOut(200);
            }
        });
        $('#return-to-top').click(function() { // When arrow is clicked
            $('body,html').animate({
                scrollTop: 0 // Scroll to top of body
            }, 500);
        });