;$(function() {
//Переключение класов по id на странице
	$('#myTab a[href*="#"], #info-scroll, #down-scroll').bind('click', function(e) {
		e.preventDefault();
		var target = $(this).attr("href");
		$('html, body').stop().animate(
			{ scrollTop: $(target).offset().top - 80}, 
			500, 
			function() {
				location.hash = target;
			}
		);
		return false;
	});
	//Плавный переход навигации на странице
	$('#myTab a, #info-scroll, #down-scroll').click(function (e) {
		e.preventDefault();
	});
});