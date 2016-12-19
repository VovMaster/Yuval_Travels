$(document).ready(function() {
	if($('body').width() > 767) {
		retinajs(document.querySelectorAll('.table-retina'));
	}
	retinajs(document.querySelectorAll('*[data-rjs]:not(.table-retina)'));

	$('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500
	});
   $(".fancybox").fancybox({
   	padding: 0
   });
   $('.button-menu').click(function(){
   	$(this).toggleClass('open-nav');
   });

   setTimeout(function() {
		$('.wrap-opacity-block').fadeOut();
   }, 10000);


   $('.wrap-opacity-block').click(function(){
   		$('.wrap-opacity-block').fadeOut();
   });
});