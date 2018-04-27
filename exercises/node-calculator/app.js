var ask = require('readline-sync'),
    operations = ['add', 'sub', 'mul', 'div'];

var firstNum = ask.questionInt('Please enter your first number\n>> ');
var secondNum = ask.questionInt('Please enter your second number\n>> ');
var operation = operations[
    ask.keyInSelect(operations,
    'Please select the operation to perform\n>> ')
];
var result = 0;

if (operation === 'add') {
    result = sum(firstNum, secondNum);
} else if (operation === 'sub') {
    result = difference(firstNum, secondNum);
} else if (operation === 'mul') {
    result = product(firstNum, secondNum);
} else if (operation === 'div') {
    result = quotient(firstNum, secondNum);
}

if (result === 0) {
    console.log(`...`);
} else {
    console.log(`The result is: ${result}`);
}

function sum(num1, num2) {
    return num1 + num2;
}

function product(num1, num2) {
    return num1 * num2;
}

function quotient(num1, num2) {
    return num1 / num2;
}

function difference(num1, num2) {
    return num1 - num2;
}
