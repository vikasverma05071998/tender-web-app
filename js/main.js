(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc; // Define $videoSrc outside the click event handler
    
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
            console.log($videoSrc); // Log the video source when the button is clicked
        });
    
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        });
    
        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', ''); // Clear the src attribute to stop the video
        });
    });
    

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("customerForm");
    const statusMessage = document.getElementById("statusMessage");

    customerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        // const message = document.getElementById("message").value;

        const xhr = new XMLHttpRequest();
        const url = "https://formspree.io/f/mnqkoyzd"; // Replace with your Formspree email address or use another email service.

        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            debugger;
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    statusMessage.innerHTML = "Message sent successfully!";
                    alert("Message sent successfully!")
                    customerForm.reset();
                } else {
                    statusMessage.innerHTML = "Error sending message. Please try again later.";
                }
               setTimeout(()=>{
                statusMessage.innerHTML = "";
               },3000)
            }
        };

        const data = {
            // name: name,
            email: email,
            // message: message,
        };

        xhr.send(JSON.stringify(data));
    });
});
