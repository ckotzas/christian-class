$(document).ready(function(){

	$('button').click(function(){ 
 	$('#container').css('background-color', 'yellow');
 	});

// $('button').toggle(
//      function () {
//        $('#container').css('background-color', 'blue');
//      },
//      function () {
//        $('#container').css('background-color', 'red');
//      },
//      function () {
//        $('#container').css('background-color', 'yellow');
//      }
//    );


});


  $("#button").toggle(
      function () {
        $("#background").css({'background-color', 'blue'});
      },
      function () {
        $("#background").css({'background-color', 'red'});
      },
      function () {
        $("#background").css({'background-color', 'yellow'});
      });


