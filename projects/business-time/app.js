var main = document.getElementById('main-box');
var illusion = document.getElementById('illusion');
var menu = document.getElementById('menu');

main.style.right = '0px';

menu.addEventListener('click', function() {
    console.log(main.style.right);
    if (main.style.right == '0px') {
        console.log('hey');
        main.style.right = '50%';
    } else {
        console.log('hey');
        main.style.right = '0';
    }
});