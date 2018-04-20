function checkPalindrom(string) {
    return string.split('').reverse().join('') === string;
}

console.log(checkPalindrom('acaramanamaraca'));


function greet(fName, lName) {
    return 'Hello '.concat(fName, ' ', lName);
}

console.log(greet('Steve', 'Jobs'));


function loudOrNot(loud, string) {
    if (loud === true) {
        return string.toUpperCase();
    } else {
        return string.toLowerCase();
    }
}

console.log(loudOrNot(false, 'Hey THIS is NOt a trombone'));


function dotts(string) {
    stringArray = string.toUpperCase().split('');
    for (var i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].concat('.');
    }
    return stringArray.join(' ');
}

console.log(dotts('hell0'));


console.log('helloe'.indexOf('e'));
console.log('helloe'.lastIndexOf('e'));

console.log('hello this is our new office for ello, great'.match(/ello/g));

console.log('hellohelloxxhellohello'.slice(6, 11));

console.log('hellohelloxxhellohello'.substr(6, 5));



