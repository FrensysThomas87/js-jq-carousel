$(document).ready(function(){





  $('.slider-wrapper .next .fas.fa-angle-right').click(function(){
    var currentImage = $('.images img.active');
    var firstImage = $('.images img.first');
    // currentImage++;


    // if(currentImage === 4){
    //   $('img.first').addClass('active');
    //   currentImage = 0;
    // }

    if(currentImage.hasClass('last')){
      firstImage.addClass('active');
      currentImage.removeClass('active');
    }else {
      currentImage.removeClass('active').next().addClass('active');
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
