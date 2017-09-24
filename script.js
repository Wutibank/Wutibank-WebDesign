
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

//scroll to top
        $(document).ready(function() {
            // Add smooth scrolling to all links
            $("a").on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
