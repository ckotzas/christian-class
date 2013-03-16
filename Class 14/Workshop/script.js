$(document).ready(function() {

	$('button').click(function(){

		$('#ball').animate({bottom: '+=300',left: '+=360'});
		
		$('#ball').animate({bottom: '-=300'});
		$('#ball').animate({left: '-=360'});

	});

});
