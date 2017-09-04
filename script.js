// carousel
$(document).ready(function() {
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    cellSelector: '.carousel-cell',
    accessibility: false,
    contain: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: true,
    autoPlay: true
  }); 
  $('.email-sub').on('submit', function(event) {
    var update = false;
    event.preventDefault();
    if($($('.email-sub input[name="name"]')).val() == '') {
      alert('Please enter a valid email address!');
      update = true; 
    } else {
      alert ('Thank you for Subscribing!');
    }
  });
});


/* SMOOTH SCROLLING */ 

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        target.focus(); // Setting focus
        if (target.is(":focus")){ // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        };
        return false;
      }
    }
  });
});

$(function() {
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });
});