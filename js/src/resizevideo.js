;$(function() {
	var video = $('#video');
	//resize
    var handleBockSize = function() {
    	var hg = $(window).height();
		var wd = $(window).width();
	    $('#block-video').css({height: hg + "px", width: wd + "px"});
	}
	$(window).on('resize', handleBockSize);
	$(window).on('load', handleBockSize);
	//resize video
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		$('#hitop').css({'top': st * 0.3 + "px"});
		$('#hibtn').css({'bottom': st * 0.2 + "px"});
	});
});