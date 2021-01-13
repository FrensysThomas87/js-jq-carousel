$(document).ready(function(){


  var currentImage = 0;



  $('.slider-wrapper .next .fas.fa-angle-right').click(function(){
    $('img.active').removeClass('active').next().addClass('active');
    currentImage++;


    if(currentImage === 4){
      $('img.first').addClass('active');
      currentImage = 0;
    }

    console.log(currentImage);

});


  $('.slider-wrapper .prev .fas.fa-angle-left').click(function(){
    $('img.active').removeClass('active').prev().addClass('active');


    if(currentImage === 0){
      $('img.last').addClass('active');
      currentImage++;

    }

    console.log(currentImage);

});



});
