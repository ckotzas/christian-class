$(document).ready(function() {


$('button').click(function(){

	$("#you").animate({left:100},"fast");

	$('#believer').animate ({
		bottom: '+=250',
		left: '450px',
		
     });

	$("#believer").animate({top:"300px"}, "slow");
	$("#believer").animate({left:300},"slow");




 });
});

