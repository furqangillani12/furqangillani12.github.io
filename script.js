$(document).ready(function() {
    // Smooth scrolling
    $("nav ul li a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 800);
        }
    });

    // Fade-in effect for sections
    $("section").hide().fadeIn(1500);
});
