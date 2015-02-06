// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59441929-1', 'auto');
ga('send', 'pageview');

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