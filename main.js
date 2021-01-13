$(document).ready(function(){
  $('.slider-wrapper .next .fas.fa-angle-right').click(function(){
    $('img.active').removeClass('active').next().addClass('active');
  });

  $('.slider-wrapper .prev .fas.fa-angle-left').click(function(){
    $('img.active').removeClass('active').prev().addClass('active');
  });

});
