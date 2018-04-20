function add(num1, num2) {
    return num1 + num2;
}

console.log(add(5, 5));


function compare(num1, num2, num3) {
    return num1 > num2 && num1 > num3 ? num1 : 
        num2 > num1 && num2 > num3 ? num2 : num3;
}

console.log(compare(4, 5, 3));


function evenOrOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}

console.log(evenOrOdd(7));


function longString(str) {
    if (str.length > 20) {
        return str.slice(0, str.length / 2);
    } else {
        return str + str;
    }
}

console.log(longString('hellohelloxxhellohello'));


function fibonacci(n) {
    var sequence = [];
    if (n > 0) {
        sequence.push(0);
    }
    // newN = currentN + prevN
    if (n > 1) {
        sequence.push(1);
        for (var i = 0; i < n; i++) {
            currentN = sequence[sequence.length - 1];
            prevN = sequence[sequence.length - 2];
            newN = currentN + prevN;
            sequence.push(newN);
        }
    }
    for (var i = 0; i < sequence.length; i++) {
        var sum 
    }
    // arrow func is accumulator, '0' is current value to start adding from
    var sum = sequence.reduce((a, b) => a + b, 0);
    console.log(sum);
    return sequence;
}

console.log(fibonacci(12));


function solveQuadraticE(a, b, c) {
    var solutionOne = (-b + ((b**2 - (4*a*c)) ** 0.5)) / (2*a);
    var solutionTwo = (-b - ((b**2 - (4*a*c)) ** 0.5)) / (2*a);
    var message = "x = " + solutionOne + ", " + solutionTwo;
    return message;
}

console.log(solveQuadraticE(2, -8, -24));


function hiFrequencyChar(str) {
    var count = 0;
    var isFirst = true;
    var currentCount,
        prevCount,
        currentChar,
        prevChar;
    for (var i = 0; i < str.length; i++) {
        currentChar = str[i];
        for (var j = 0; j < str.length; j++) {
            if (currentChar === str[j]) {
                count++;
                currentCount = count;
            }
        }
        count = 0;
        if (currentCount >= prevCount || isFirst === true) {
            isFirst = false;
            prevCount = currentCount;
            prevChar = currentChar;
        }
    }
    return prevChar;
}

console.log(hiFrequencyChar('taciturn'));