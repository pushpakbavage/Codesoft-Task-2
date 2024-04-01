$(document).ready(function() {
    // Smooth scroll for navigation links
    $('nav a').on('click', function(e) {
      e.preventDefault();
  
      var target = $($(this).attr('href'));
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });