$(document).ready(function(){

  var imgLast = $('.last.active');
  var currentImage = 0;

  console.log($('img'));

  $('.slider-wrapper .next .fas.fa-angle-right').click(function(){
    $('img.active').removeClass('active').next().addClass('active');
    currentImage++;
    console.log(currentImage);

    if(currentImage === 4){
      $('img.first').addClass('active');
      currentImage = 0;
    }

});

$('.slider-wrapper .next .fas.fa-angle-right').click(function(){


});


  // $('.slider-wrapper .next .fas.fa-angle-right').click(function(){
  //   $('img.last').removeClass('active').prev('.first').addClass('active');
  // });

  $('.slider-wrapper .prev .fas.fa-angle-left').click(function(){
    $('img.active').removeClass('active').prev().addClass('active');
  });



});
