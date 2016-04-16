$(function() {
    var hg = $(window).height();
    var html = 85, css = 90, javascript = 25, jq = 35, grunt = 65, less = 87, git = 78, adobeps = 70, bower = 30, sass = 60, jade = 70, bootstrap = 38;
    $.fn.progress = function() {
        $(this).each(function() {
            
        });
        return this;
    }
    // Use plugin
    $('.html .progress').progress();

    var res = $('.html').scrollTop + hg;
    console.log(res);
    

        //if ($(document).scrollTop() + $(window).height() > $(ЭЛЕМЕНТ).offset().top && $(document).scrollTop() - $(ЭЛЕМЕНТ).offset().top < $(ЭЛЕМЕНТ).height())
    //элемент на экране
        //else
    //элемент не на экране
});