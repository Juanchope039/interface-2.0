$(document).ready(function(){
	alert('Funciona!');
	$('ul.taps li a:First').addClass('activo');/*agregar clase*/
	$('div.contenedor-taps article').hide();/*ocultar*/
	$('div.contenedor-taps article:First').show();/*mostrar*/
	/*funcion para mostra y ocultar div's*/
	$('ul.taps li a').click(function(){/*funcion al hacer click*/
		$('ul.taps li a').removeClass('activo');/*remover clase*/
		$(this).addClass('activo');/*agregar clase al elemento que se le dio click*/
		var activarTap = $(this).attr('href');
		/*console.log(activarTap);*//*mostrar la consola*/
		$('div.contenedor-taps article').hide();/*ocultar*/
		$(activarTap).show();/*mostrar lo que indique la variable*/
	});
	/*funcion para mostrar paginas en iframe*/
	$('.menu').on('click', function(){
		var activar = $(this).attr('href');
		$('#web').attr('src', activar);
		console.log(activar);
	});
});