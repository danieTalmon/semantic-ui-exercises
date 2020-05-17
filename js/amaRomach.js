$(document).ready(function(){

$('.ui.dropdown')
.dropdown({
  on: 'hover'
})
;

  $('.rating')
  .rating({
    initialRating: 1,
    maxRating: 5
  });

  $('.modal')
  .modal('attach events', '#cart', 'show')
  ;
})