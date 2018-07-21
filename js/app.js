/*scroll*/
$(document).ready(function(){
	$("a").on("click", function(event){
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;

			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});

/*boton hacia arriba*/
$(document).ready(function(){
 
	$('.arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 600);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.arriba').slideDown(600);
		} else {
			
			$('.arriba').slideUp(600);
		}
	});
 
});

/*cambio por seccion*/
$(document).bind("load", function(){
  			
  	});
 var punto = new Waypoint({
  element: $('#Quienes'),
  handler: function(direction) {
  	if(direction + "up"){
  	 $(".icon-circle-up").addClass("active");
  	} else{
  		$(".icon-circle-up").removeClass("active");
  	}

    console.log("#Quienes, direction: " + direction); /* Escribe en consola cuando se activa la función */
  },
  offset: 150
})

$(document).bind("load", function(){
  			
  	});
 var punto = new Waypoint({
  element: $('#Contacto'),
  handler: function(direction) {
  	if(direction + "down"){
  	 $(".icon-circle-up").addClass("active");
  	} else{
  		$(".icon-circle-up").removeClass("active");
  	}

    console.log("#Contacto, direction: " + direction); /* Escribe en consola cuando se activa la función */
  },
  offset: 150
})

$(document).bind("load", function(){
  			
  	});
 var punto = new Waypoint({
  element: $('#Localizacion'),
  handler: function(direction) {
  	if(direction == "down"){
  	 $(".icon-circle-up").addClass("active");
  	} else{
  		$(".icon-circle-up").removeClass("active");
  	}

    console.log("#Localizacion, direction: " + direction); /* Escribe en consola cuando se activa la función */
  },
  offset: 150
})

 var punto = new Waypoint({
  element: $('#Servicios'),
  handler: function(direction) {
  	if(direction == "down"){
  	 $(".icon-circle-up").addClass("active");
  	} else{
  		$(".icon-circle-up").removeClass("active");
  	}

    console.log("#Servicios, direction: " + direction); /* Escribe en consola cuando se activa la función */
  },
  offset: 150
})