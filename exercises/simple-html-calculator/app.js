var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var sum = 0,
    difference = 0,
    product = 0;
var addResult = document.getElementById('addition-result');
var subtractResult = document.getElementById('subtraction-result');
var multiplyResult = document.getElementById('multiplication-result');

function getNums(parent) {
    return [Number(parent.children[0].value), Number(parent.children[1].value)]
}

function compute(operation) {
    if (operation === add) {
        return getNums(operation)[0] + getNums(operation)[1];
    } else if (operation === subtract) {
        return getNums(operation)[0] - getNums(operation)[1];
    } else if (operation === multiply) {
        return getNums(operation)[0] * getNums(operation)[1];
    }
}

add.children[2].addEventListener('click', function(e) {
    e.preventDefault();
    console.log(compute(add));
    sum = compute(add);
    addResult.textContent = sum;
})
subtract.children[2].addEventListener('click', function(e) {
    e.preventDefault();
    console.log(compute(subtract));
    difference = compute(subtract);
    subtractResult.textContent = difference;
})
multiply.children[2].addEventListener('click', function(e) {
    e.preventDefault();
    console.log(compute(multiply));
    product = compute(multiply);
    multiplyResult.textContent = product;
})