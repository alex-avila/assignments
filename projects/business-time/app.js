var main = document.getElementById('main-wrapper');
var menu = document.getElementById('menu');
var menuBtn = document.getElementById('menu-btn');

main.style.right = '0px';

menuBtn.addEventListener('click', function() {
    if (main.style.right == '0px') {
        main.style.right = '50%';
    } else {
        main.style.right = '0';
    }
});
