var square = document.getElementById('square');
var colors = {
    blue: '#4c52f5',
    red: '#ff0045',
    yellow: '#ffff45',
    green: '#39f480',
    orange: '#fdbf49',
    purple: '#ff00e2'
}

function changeColor(color) {
    square.style.background = color;
    square.style.boxShadow = '0 0 7.5px ' + color +
            ', 0 10px 25px -10px #555';
}

square.addEventListener('mouseover', function() {
     changeColor(colors.blue);
});
square.addEventListener('mousedown', function() {
     changeColor(colors.red);
});
square.addEventListener('mouseup', function() {
     changeColor(colors.yellow);
});
square.addEventListener('dblclick', function() {
     changeColor(colors.green);
});
window.addEventListener('wheel', function() {
     changeColor(colors.orange);
});
window.addEventListener('keypress', function(event) {
    var key = event.key.toLowerCase();
    switch (key) {
        case 'b':
            changeColor(colors.blue);
            break;
        case 'r':
            changeColor(colors.red);
            break;
        case 'y':
            changeColor(colors.yellow);
            break;
        case 'g':
            changeColor(colors.green);
            break;
        case 'o':
            changeColor(colors.orange);
            break;
        default:
            changeColor(colors.purple);
    }
});