$(document).ready(function() {

    $("#slider").slider({
    	max: 25,
    	min: 10,
    	change: function(event, ui){

    	$("#s2").html(ui.value);
    	$("#s2").css("height", ui.value * 10 + "px")
    	}

    });

  });

