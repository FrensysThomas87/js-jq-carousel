$(document).ready(function(){

  $('.slider-wrapper .next .fas.fa-angle-right').click(function(){
    //Recupero l'immagine dove mi trovo al momento
    var currentImage = $('.images img.active');
    var currentDot = $('.nav i.active');
    var firsDot = $('.nav i.first');

    //Recupero la prima immagine
    var firstImage = $('.images img.first');

    // Se l'immagine corrente ha la classe "last"
    if(currentImage.hasClass('last')){

      // alla prima immagine do la classe active
      firstImage.addClass('active');

      //all'immagine corrente tolgo la classe active
      currentImage.removeClass('active');
    }else {

      //vai avanti normalmente
      currentImage.removeClass('active').next().addClass('active');
    }

    if(currentDot.hasClass('last')){
      firsDot.addClass('active');
      currentDot.removeClass('active');
    }else{
      currentDot.removeClass('active').next().addClass('active');
    }

  });

  $('.slider-wrapper .prev .fas.fa-angle-left').click(function(){
    // Qui sotto faccio il contrario

    var currentImage = $('.images img.active');
    var lastImage = $('.images img.last');
    var currentDot = $('.nav i.active');
    var lastDot = $('.nav i.last');

    if(currentImage.hasClass('first')){
      lastImage.addClass('active');
      currentImage.removeClass('active');
    }else{
      currentImage.removeClass('active').prev().addClass('active');
    }

    if(currentDot.hasClass('first')){
      lastDot.addClass('active');
      currentDot.removeClass('active');
    }else{
      currentDot.removeClass('active').prev().addClass('active');
    }

});

  $('.nav i').click(function(){
    var activeDot = $('.nav i.active');
    var currentImage = $('.images img.active');
    var img = $('.images img');
    $(activeDot).removeClass('active');
    $(this).addClass('active');

    


  });

});
