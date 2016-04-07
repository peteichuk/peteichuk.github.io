$('document').ready(function() {
 	var wd = $(window).width();
 	var trigger = $('#hamburger'),
 		isClosed = true;
 	trigger.click(function() {
 		burgerTime();
 	});
 	$('#hamburger').click (function() {
		$('.one').css({left: '-' + wd});
	});
 	function burgerTime() {
 		if (isClosed == true) {
 			trigger.removeClass('is-closed');
 			trigger.addClass('is-open');
 			isClosed = false;
 			
 			$('#mobile').addClass('active');
 			$('.one').animate({
				left: '0px'
			}, 300);
 		} else {
 			$('.one').animate({
				left: '-' + wd
			}, 300);
			setTimeout(function () {
		        trigger.removeClass('is-open');
	 			trigger.addClass('is-closed');
	 			isClosed = true;
	 			$('#mobile').removeClass('active');
		    }, 300);
 		}
 	}
});