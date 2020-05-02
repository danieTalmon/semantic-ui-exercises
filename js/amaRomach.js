$(document).ready(function(){

$('.browse')
  .popup({
    position:'bottom center',
    popup : $('.popup'),
    on: 'click',
  });

  $('.rating')
  .rating({
    initialRating: 1,
    maxRating: 5
  });

  $('.modal')
  .modal('attach events', '#cart', 'show')
  ;
})