function printIndLetters(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

function findChar(str, char) {
    var found = false;
    for (var i = 0; i < str.length && !found; i++) {
        if (str[i] === char) {
            found = true;
            console.log(i);
        }
        console.log(i);
    }
    if (!found) {
        console.log('Character not found.')
    }
}

function find42(arr) {
    var found = false;
    for (var i = 0; i < arr.length && !found; i++) {
        if (arr[i] === 42) {
            found = true;
        }
    }
    if (!found) {
        console.log('42 was not found.');
    }
}

function smallestNum(arr) {
    var isFirst = true;
    var min = 0;
    for (var i = 0; i <= 10; i++) {
        if (isFirst) {
            isFirst = false;
            min = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}

printIndLetters('hellohelloxxhellohello');

findChar('hellohelloxxhellohello', 'x');

find42([1, 5, 6, 3, 6]);
find42([1, 5, 42, 31, 6]);

smallestNum([-1, 0, 68, 6, 3, 6, 2, 77, -2, 53]);
