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
   // autoPlay: true
  });
 $(document).querySelector('#about').scrollIntoView({ 
  behavior: 'smooth' 
  });
});

