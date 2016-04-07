function initialize() {
	var latlng = new google.maps.LatLng(48.010543, 23.575587);
	var settings = {
		zoom: 15,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading1"></h1>'+
		'<h1 id="firstHeading" class="firstHeading">WEB Peteichuk</h1>'+
		'<div id="bodyContent">'+
		'<p>Одно из мест встреч, и оно может быть не единственное.</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	var companyImage = new google.maps.MarkerImage('images/logos.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
		new google.maps.Size(130,50),
		new google.maps.Point(0,0),
		new google.maps.Point(65, 50));

	var companyPos = new google.maps.LatLng(48.010543, 23.575587);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"WEB Peteichuk",
		zIndex: 3});

	var parkingImage = new google.maps.MarkerImage('images/parking.png',
		new google.maps.Size(50,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var parkingShadow = new google.maps.MarkerImage('images/parking_shadow.png',
		new google.maps.Size(70,50),
		new google.maps.Point(0,0),
		new google.maps.Point(60, 50)
	);

	var parkingPos = new google.maps.LatLng(48.010736, 23.575284);

	var parkingMarker = new google.maps.Marker({
		position: parkingPos,
		map: map,
		icon: parkingImage,
		shadow: parkingShadow,
		title:"Места для парковки",
		zIndex: 1
	});
	
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
}
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
$ (function() {
	$(window).on('load', function () {
	    var $preloader = $('#page-preloader'),
	        $spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');
	});
});
;$(function() {
	var video = $('#video');
	//resize
    var handleBockSize = function() {
    	var hg = $(window).height();
		var wd = $(window).width();
	    $('#post-show').css({height: hg + "px", width: wd + "px"});
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
//scroll animate
$(document).ready(function() {

    // Scroll Variables (tweakable)
    var framerate = 150; // [Hz]    150
    var animtime = 400; // [px]    400
    var stepsize = 120; // [px]    120

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    var pulseAlgorithm = true;
    var pulseScale = 3; //   8
    var pulseNormalize = 1;

    // Keyboard Settings
    var disableKeyboard = false;
    var arrowscroll = 50; // [px]   50

    // Excluded pages
    var exclude = "";

    // Other Variables
    var frame = false;
    var direction = {
        x: 0,
        y: 0
    };
    var initdone = false;
    var fixedback = true;
    var activeElement;
    var root;

    var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };


    /***********************************************
     * INITIALIZE
     ***********************************************/

    /**
     * Tests if smooth scrolling is allowed. Shuts down everything if not.
     */
    function initTest() {

        // disable keys for google reader (spacebar conflict)
        if (document.URL.indexOf("google.com/reader/view") > -1) {
            disableKeyboard = true;
        }

        // disable everything if the page is blacklisted
        if (exclude) {
            var domains = exclude.split(/[,\n] ?/);
            for (var i = domains.length; i--;) {
                if (document.URL.indexOf(domains[i]) > -1) {
                    removeEvent("mousewheel", wheel);
                    disableKeyboard = true;
                    break;
                }
            }
        }
    }

    /**
     * Sets up scrolls array, determines if frames are involved.
     */
    function init() {

        if (!document.body) return;

        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;

        // check compat mode for root element
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;

        initTest();
        initdone = true;

        // Checks if this script is running in a frame
        if (top != self) {
            frame = true;
        }

        /**
         * This fixes a bug where the areas left and right to
         * the content does not trigger the onmousewheel event
         * on some pages. e.g.: html, body { height: 100% }
         */
        else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
                html.offsetHeight <= windowHeight)) {
            root.style.height = "auto";
            if (root.offsetHeight <= windowHeight) {
                var underlay = document.createElement("div");
                underlay.style.clear = "both";
                body.appendChild(underlay);
            }
        }

        if (document.URL.indexOf("mail.google.com") > -1) {
            var s = document.createElement("style");
            s.innerHTML = ".iu { visibility: hidden }";
            (document.getElementsByTagName("head")[0] || html).appendChild(s);
        }

        if (!fixedback) {
            body.style.backgroundAttachment = "scroll";
        }

        // disable keyboard support
        if (disableKeyboard) {
            removeEvent("keydown", keydown);
        }
    }


    /************************************************
     * SCROLLING
     ************************************************/

    var que = [];
    var pending = false;

    /**
     * Pushes scroll actions to the scrolling queue.
     */
    function scrollArray(elem, left, top, delay) {

        delay || (delay = 300);
        directionCheck(left, top);

        // push a scroll command
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: +new Date
        });

        // don't act if there's a pending queue
        if (pending) {
            return;
        }

        var step = function() {

            var now = +new Date;
            var scrollX = 0;
            var scrollY = 0;

            for (var i = 0; i < que.length; i++) {

                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= animtime);

                // scroll position: [0, 1]
                var position = (finished) ? 1 : elapsed / animtime;

                // easing [optional]
                if (pulseAlgorithm) {
                    position = pulse(position);
                }

                // only need the difference
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;

                // add this to the total scrolling
                scrollX += x;
                scrollY += y;

                // update last values
                item.lastX += x;
                item.lastY += y;

                // delete and step back if it's over
                if (finished) {
                    que.splice(i, 1);
                    i--;
                }
            }

            // scroll left
            if (left) {
                var lastLeft = elem.scrollLeft;
                elem.scrollLeft += scrollX;

                // scroll left failed (edge)
                if (scrollX && elem.scrollLeft === lastLeft) {
                    left = 0;
                }
            }

            // scroll top
            if (top) {
                var lastTop = elem.scrollTop;
                elem.scrollTop += scrollY;

                // scroll top failed (edge)
                if (scrollY && elem.scrollTop === lastTop) {
                    top = 0;
                }
            }

            // clean up if there's nothing left to do
            if (!left && !top) {
                que = [];
            }

            if (que.length) {
                setTimeout(step, delay / framerate + 1);
            } else {
                pending = false;
            }
        }

        // start a new queue of actions
        setTimeout(step, 0);
        pending = true;
    }


    /***********************************************
     * EVENTS
     ***********************************************/

    /**
     * Mouse wheel handler.
     * @param {Object} event
     */
    function wheel(event) {

        if (!initdone) {
            init();
        }

        var target = event.target;
        var overflowing = overflowingAncestor(target);

        // use default if there's no overflowing
        // element or default action is prevented
        if (!overflowing || event.defaultPrevented ||
            isNodeName(activeElement, "embed") ||
            (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
            return true;
        }

        var deltaX = event.wheelDeltaX || 0;
        var deltaY = event.wheelDeltaY || 0;

        // use wheelDelta if deltaX/Y is not available
        if (!deltaX && !deltaY) {
            deltaY = event.wheelDelta || 0;
        }

        // scale by step size
        // delta is 120 most of the time
        // synaptics seems to send 1 sometimes
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= stepsize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= stepsize / 120;
        }

        scrollArray(overflowing, -deltaX, -deltaY);
        event.preventDefault();
    }

    /**
     * Keydown event handler.
     * @param {Object} event
     */
    function keydown(event) {

        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey;

        // do nothing if user is editing text
        // or using a modifier key (except shift)
        if (/input|textarea|embed/i.test(target.nodeName) ||
            target.isContentEditable ||
            event.defaultPrevented ||
            modifier) {
            return true;
        }
        // spacebar should trigger button press
        if (isNodeName(target, "button") &&
            event.keyCode === key.spacebar) {
            return true;
        }

        var shift, x = 0,
            y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;

        if (elem == document.body) {
            clientHeight = window.innerHeight;
        }

        switch (event.keyCode) {
            case key.up:
                y = -arrowscroll;
                break;
            case key.down:
                y = arrowscroll;
                break;
            case key.spacebar: // (+ shift)
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                y = -elem.scrollTop;
                break;
            case key.end:
                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                y = (damt > 0) ? damt + 10 : 0;
                break;
            case key.left:
                x = -arrowscroll;
                break;
            case key.right:
                x = arrowscroll;
                break;
            default:
                return true; // a key we don't care about
        }

        scrollArray(elem, x, y);
        event.preventDefault();
    }

    /**
     * Mousedown event only for updating activeElement
     */
    function mousedown(event) {
        activeElement = event.target;
    }


    /***********************************************
     * OVERFLOW
     ***********************************************/

    var cache = {}; // cleared out every once in while
    setInterval(function() {
        cache = {};
    }, 10 * 300);

    var uniqueID = (function() {
        var i = 0;
        return function(el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    function overflowingAncestor(el) {
        var elems = [];
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                if (!frame || root.clientHeight + 10 < rootScrollHeight) {
                    return setCache(elems, document.body); // scrolling root in WebKit
                }
            } else if (el.clientHeight + 10 < el.scrollHeight) {
                overflow = getComputedStyle(el, "").getPropertyValue("overflow");
                if (overflow === "scroll" || overflow === "auto") {
                    return setCache(elems, el);
                }
            }
        } while (el = el.parentNode);
    }


    /***********************************************
     * HELPERS
     ***********************************************/

    function addEvent(type, fn, bubble) {
        window.addEventListener(type, fn, (bubble || false));
    }

    function removeEvent(type, fn, bubble) {
        window.removeEventListener(type, fn, (bubble || false));
    }

    function isNodeName(el, tag) {
        return el.nodeName.toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
        }
    }

    /***********************************************
     * PULSE
     ***********************************************/

    /**
     * Viscous fluid with a pulse for part and decay for the rest.
     * - Applies a fixed force over an interval (a damped acceleration), and
     * - Lets the exponential bleed away the velocity over a longer interval
     * - Michael Herf, http://stereopsis.com/stopping/
     */
    function pulse_(x) {
        var val, start, expx;
        // test
        x = x * pulseScale;
        if (x < 1) { // acceleartion
            val = x - (1 - Math.exp(-x));
        } else { // tail
            // the previous animation ended here:
            start = Math.exp(-1);
            // simple viscous drag
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;

        if (pulseNormalize == 1) {
            pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }

    // only for Chrome
    if (/chrome/.test(navigator.userAgent.toLowerCase())) {
        addEvent("mousedown", mousedown);
        addEvent("mousewheel", wheel);
        addEvent("keydown", keydown);
        addEvent("load", init);
    }
});
! function($) {
	"use strict";

	function ScrollSpy(element, options) {
		var process = $.proxy(this.process, this),
			$element = $(element).is('body') ? $(window) : $(element),
			href
		this.options = $.extend({}, $.fn.scrollspy.defaults, options)
		this.$scrollElement = $element.on('scroll.scroll.data-api', process)
		this.selector = (this.options.target || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) || '') + ' .nav li > a'
		this.$body = $('body')
		this.refresh()
		this.process()
	}
	ScrollSpy.prototype = {
		constructor: ScrollSpy,
		refresh: function() {
			var self = this,
				$targets
			this.offsets = $([])
			this.targets = $([])
			$targets = this.$body.find(this.selector).map(function() {
				var $el = $(this),
					href = $el.data('target') || $el.attr('href'),
					$href = /^#\w/.test(href) && $(href)
				return ($href && href.length && [
					[$href.position().top, href]
				]) || null
			}).sort(function(a, b) {
				return a[0] - b[0]
			}).each(function() {
				self.offsets.push(this[0])
				self.targets.push(this[1])
			})
		},
		process: function() {
			var scrollTop = this.$scrollElement.scrollTop() + this.options.offset,
				scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
				maxScroll = scrollHeight - this.$scrollElement.height(),
				offsets = this.offsets,
				targets = this.targets,
				activeTarget = this.activeTarget,
				i
			if (scrollTop >= maxScroll) {
				return activeTarget != (i = targets.last()[0]) && this.activate(i)
			}
			for (i = offsets.length; i--;) {
				activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
			}
		},
		activate: function(target) {
			var active, selector
			this.activeTarget = target
			$(this.selector).parent('.active').removeClass('active')
			selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]'
			active = $(selector).parent('li').addClass('active')
			if (active.parent('.dropdown-menu')) {
				active = active.closest('li.dropdown').addClass('active')
			}
			active.trigger('activate')
		}
	}
	$.fn.scrollspy = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('scrollspy'),
				options = typeof option == 'object' && option
			if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.scrollspy.Constructor = ScrollSpy
	$.fn.scrollspy.defaults = {
		offset: 10
	}
	$(function() {
		$('[data-spy="scroll"]').each(function() {
			var $spy = $(this)
			$spy.scrollspy($spy.data())
		})
	})
}(window.jQuery);
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
! function($) {
	"use strict";
	var Tab = function(element) {
		this.element = $(element)
	}
	Tab.prototype = {
		constructor: Tab,
		show: function() {
			var $this = this.element,
				$ul = $this.closest('ul:not(.dropdown-menu)'),
				selector = $this.attr('data-target'),
				previous, $target, e
			if (!selector) {
				selector = $this.attr('href')
				selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
			}
			if ($this.parent('li').hasClass('active')) return
			previous = $ul.find('.active a').last()[0]
			e = $.Event('show', {
				relatedTarget: previous
			})
			$this.trigger(e)
			if (e.isDefaultPrevented()) return
			$target = $(selector)
			this.activate($this.parent('li'), $ul)
			this.activate($target, $target.parent(), function() {
				$this.trigger({
					type: 'shown',
					relatedTarget: previous
				})
			})
		},
		activate: function(element, container, callback) {
			var $active = container.find('> .active'),
				transition = callback && $.support.transition && $active.hasClass('fade')

			function next() {
				$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
				element.addClass('active')
				if (transition) {
					element[0].offsetWidth
					element.addClass('in')
				} else {
					element.removeClass('fade')
				}
				if (element.parent('.dropdown-menu')) {
					element.closest('li.dropdown').addClass('active')
				}
				callback && callback()
			}
			transition ? $active.one($.support.transition.end, next) : next()
			$active.removeClass('in')
		}
	}
	$.fn.tab = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('tab')
			if (!data) $this.data('tab', (data = new Tab(this)))
			if (typeof option == 'string') data[option]()
		})
	}
	$.fn.tab.Constructor = Tab
	$(function() {
		$('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
			e.preventDefault()
			$(this).tab('show')
		})
	})
}(window.jQuery);