$(document).ready(function(){
  $('.slider-wrapper .next .fas.fa-angle-right').click(function(){
    $('.active').removeClass('active').next().addClass('active');
  });

  // $('.slider-wrapper .next .fas.fa-angle-left').click(function(){
  //   $('.active.first').addClass('active').next().removeClass('active');
  // });


});
