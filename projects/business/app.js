var main = document.getElementById('main-wrapper');
var menu = document.getElementById('menu');
var menuBtn = document.getElementById('menu-btn');
var featuredImg = document.getElementById('featured-img');

var largeBreakpoint = 900;

main.style.right = '0px';

menuBtn.addEventListener('click', function() {
    if (main.style.right == '0px') {
        main.style.right = '50%';
    } else {
        main.style.right = '0';
    }
});

if (window.innerWidth >= largeBreakpoint) {
    featuredImg.src = 'images/hzd-wide.jpg';
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= largeBreakpoint) {
        featuredImg.src = 'images/hzd-wide.jpg';
    } else {
        featuredImg.src = 'images/horizon-zero-dawn.jpg';
    }
});
