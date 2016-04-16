;$(document).ready(function() {
	var wd = $(window).width();
	var hg = $(window).height();
	var hom = $('#hom');
	var trigger = $('#hamburger'), isClosed = true;
	trigger.click(function() {
		burgerTime();
	});
	
	function burgerTime() {
		if (isClosed == true) {
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = false;
			
			$('#mobile').addClass('active');
			$('.one').animate({
				left: '-' + wd
			}, 0);
			$('.one').animate({
				left: '0px'
			}, 400);
		} else {
			$('.one').animate({
				left: '-' + wd
			}, 300);
			setTimeout(function () {
				trigger.removeClass('is-open');
				trigger.addClass('is-closed');
				isClosed = true;
				$('#mobile').removeClass('active');
			}, 400);
		}
	}
	//closed click nav
	$('#myTab a').click(function () {
		$('.one').animate({
			left: '-' + wd
		}, 300);
		setTimeout(function () {
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = true;
			$('#mobile').removeClass('active');
		}, 400);
	});
});