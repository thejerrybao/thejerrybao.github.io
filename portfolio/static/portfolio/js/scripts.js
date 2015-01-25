$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 0
});

var scrollVal;
var scrolled = false;

$(document).ready(function() {
    $(window).scroll(function() {
        scrollVal = $(this).scrollTop();
        if (scrollVal > 124) {
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
            if (!scrolled) {
                scrolled = true;
                $(".header-big").css({
                    'position': 'fixed',
                    'top': '-125px'
                })
                $(".header-small").animate({ "top": "0px"}, "fast");
                $(".header-big").animate({ "top": "-210px"}, "fast");
            }
        } else {
            $(".header").css({
                'position': 'static'
            });
            $(".main-page-nav").css({
                'position': 'static'
            });
            $("body").css({
                'margin-top': '0'
            });
            if (scrolled) {
                scrolled = false;
                $(".header-small").animate({ "top": "-100px"}, "fast");
                $(".header-big").css({
                    'position': 'static'
                });
            }
        }
    });
});