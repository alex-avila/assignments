const square = document.getElementById('square');
const colors = {
    blue: '#4c52f5',
    red: '#ff0045',
    yellow: '#ffff45',
    green: '#39f480',
    orange: '#fdbf49',
    purple: '#ff00e2'
}

const changeColor = (color) => {
    square.style.background = color;
    square.style.boxShadow = '0 0 7.5px ' + color +
            ', 0 10px 25px -10px #555';
}

square.addEventListener('mouseover', () => {
     changeColor(colors.blue);
});
square.addEventListener('mousedown', () => {
     changeColor(colors.red);
});
square.addEventListener('mouseup', () => {
     changeColor(colors.yellow);
});
square.addEventListener('dblclick', () => {
     changeColor(colors.green);
});
window.addEventListener('wheel', () => {
     changeColor(colors.orange);
});
window.addEventListener('keypress', (event) => {
    let key = event.key.toLowerCase();
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