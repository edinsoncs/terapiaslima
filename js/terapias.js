$(document).ready(function(){
	$(".enviarMs").click(function(){
		var nombre = $(".inputText").val();
		if(nombre.length === 0) {
			$(".inputText").css("border","1px solid red");
		}
		else if(nombre.length > 0) {
			$("input[type='text'], input[type='email'], input[type='phone'], textarea").css("border","1px solid #A9A9A9");
		}
	});



	$(".jsHover").hover(function(){

		 $(this).find(".List--Contenido").css("display","block");

	}, function() {
			$(this).find(".List--Contenido").fadeOut("slow");
	});

	



});
