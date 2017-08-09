// carousel
$(document).ready(function() {
  //  $("a[href^='#']").not("a[href='#']").click(function() {
  //     $("#"+$(this).attr("href").slice(1)+"").focus();
  // })
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


