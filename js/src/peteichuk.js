$(function() {
	//Переключение класов по id на странице
	$('#myTab a[href*="#"]').bind('click', function(e) {
		e.preventDefault();
		var target = $(this).attr("href");
		$('html, body').stop().animate(
			{ scrollTop: $(target).offset().top}, 
			500, 
			function() {
				location.hash = target;
			}
		);
		return false;
	});
	//Плавный переход навигации на странице
	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	//Коректировка активности навбара при скроле по странице
	$('#navbar').scrollspy();
	//Проверка формы
	//Отправка сообщений началась
	$('#gform').on('load', function() {
		$('.ss-form-submit').css('display', 'block');
		$('.ss-form-container').css('display', 'none');
		$('.errorbox-good :input').val('');
	});
	//отправка сообщений завершена
	$('#iss').click(function() {
		$('.ss-form-submit').css('display', 'none');
		$('.ss-form-container').css('display', 'block');
	});
	//прозрачность меню навигации при скролле и параллакс
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		    $('#desktop').addClass('opacity');
		}
		else{
		    $('#desktop').removeClass('opacity');
		}
	});
	//portfolio-gallerey
	$('#all').click(function() {
		$('.block-c, .adaptive-c, .landing-page-c').show(300);
		$(this).addClass('active');
		$('#landing-page, #block, #adaptive').removeClass('active');
	});
	$('#block').click(function() {
		$('.block-c').show(300);
		$('.adaptive-c, .landing-page-c').hide(300);
		$(this).addClass('active');
		$('#all, #adaptive, #landing-page').removeClass('active');
	});
	$('#adaptive').click(function() {
		$('.block-c, .landing-page-c').hide(300);
		$('.adaptive-c').show(300);
		$(this).addClass('active');
		$('#all, #block, #landing-page').removeClass('active');
	});
	$('#landing-page').click(function() {
		$('.block-c, .adaptive-c').hide(300);
		$('.landing-page-c').show(300);
		$(this).addClass('active');
		$('#all, #block, #adaptive').removeClass('active');
	});
	//open modal
	$('.overlay-container').click(function(){
		var id = $(this).attr('href');
		$(id).addClass('active-modal');
		$(id)
			.animate({display: 'block'}, 300,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$(this).fadeIn('slow'); // делaем ему display: none;
			}
		);
		$('body, header').css('overflow', 'hidden');
		return false;
	});
	//close modal
	$('.tr, .close').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('.modal')
		.animate({display: 'none', top: '-100%'}, 300,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
			function(){ // пoсле aнимaции
				$('.modal').css('display', 'none'); // делaем ему display: none;
			}
		);
		$('.modal').animate({top: '0%'});
		$('body, header').css('overflow', 'visible');
	});
	//activate scroll
	$(window).scroll(top, function(event) {
		var activeClassMyTab1 = $("#activeClassMyTab1").attr('class');
		var activeClassMyTab2 = $("#activeClassMyTab2").attr('class');
		var activeClassMyTab3 = $("#activeClassMyTab3").attr('class');
		if ( activeClassMyTab1 == 'active' ) {
			$('#portfolio').addClass('object-visible');
		}
		if ( activeClassMyTab2 == 'active' ) {
			$('#profi').addClass('object-visible');
		}
		if ( activeClassMyTab3 == 'active' ) {
			$('#info').addClass('object-visible');
		}
	});
	// jQuery widget input
	$.fn.mikeWidget = function() {
		$(this).each(function() {
			var Value = $(this).val();
			var Label = $(this).next();
			var styleHandler = function() {
				if (Value == '') {
					Label.css('top', '14px');
				} else {
					Label.css('top', '-10px');
				}
			}
			$(this).change(function(){
				Value = $(this).val();
				styleHandler();
			});
			$(this).focus(function() {
				Label.css('top', '-10px');
			});
			$(this).blur(styleHandler);
		});
		return this;
	}
	// Use plugin
	$('.in-lab').mikeWidget();

	//parallax
	$(window).scroll(function() {
		var st = $(this).scrollTop(),
			img = $('#img-parallax');
		img.css('transform', 'translate(0, st + '%' )');
		console.log(st);
	});
});