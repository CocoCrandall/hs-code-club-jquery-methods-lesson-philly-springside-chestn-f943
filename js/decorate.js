$(document).ready(function(){

  $('#chair').click(function(){
      //code solution to put the blue chair in index.html
    $('.blue-chair').append("<img src='images/blue-chair.png'>");
  });

  $('#couch').click(function(){
    //code solution here to put the couch in index.html
    $('.couch').append("<img src='images/couch.png'>");
  });

  $('#chandelier').click(function(){
  //code solution here to put the chandelier in index.html
     $('.chandelier').append("<img src='images/chandelier.png'>");
  });

  $('#frame-art').click(function(){
  //code solution here to frame the art on the wall
    $('#art').addClass('frame-art');
  });

  $('#eat-pizza').click(function(){
    //code solution here to make the pizza disappear and reappear
    $('#pizza').toggle();
  });

  $('#add-tv').click(function(){
    //code solution here to add the tv to index.html
     $('.tv').append("<img src='images/off-tv.png'>");
  });

  $('#watch-tv').click(function(){
    //code solution here to turn the tv on
    $('.tv img').replaceWith("<img src='images/tv.png'>");
  });



});