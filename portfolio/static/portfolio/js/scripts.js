$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 2
});

var scrollVal;
var scrolled = false;

$(document).ready(function() {
    $(".header-small").hide();
    $(window).scroll(function() {
        scrollVal = $(this).scrollTop();
        if (scrollVal > 124) {
            if (!scrolled) {
                scrolled = true;
                $(".header").css({
                    'position': 'fixed',
                    'top': '-125px'
                });
                $(".main-page-nav").css({
                    'position': 'fixed',
                    'top': '105px'
                });
                $("body").css({
                    'margin-top': '210px'
                });
                $(".header-small, .header-big").fadeToggle();
            }
        } else {
            if (scrolled) {
                scrolled = false;
                $(".header").css({
                    'position': 'static'
                });
                $(".main-page-nav").css({
                    'position': 'static'
                });
                $("body").css({
                    'margin-top': '0'
                });
                $(".header-small, .header-big").fadeToggle();
            }
        }
    });
});