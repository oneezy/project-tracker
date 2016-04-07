/*
    App
---------------------------------------------------------------------------------- */

$(document).ready(function() {

    $( ".tabs" ).tabs({
      active: 0
    });

    $( ".collapsible" ).accordion();

    setTimeout(function(){
      $(".splash").fadeOut();
    }, 2000);

});
