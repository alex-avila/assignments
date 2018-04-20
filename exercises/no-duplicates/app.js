var input = 'bookkeeper larry';

function rmDuplicate(string) {
    var extrasString = '',
        count = 0,
        prevChar,
        newArray = [];
    var stringArray = string.split('');
    for (var i = 0; i < stringArray.length; i++) {
        count = 0;
        if (prevChar != stringArray[i]) {
            newArray.push(stringArray[i]);
            for (var j = 0; j < stringArray.length; j++) {
                if (stringArray[j] === stringArray[i]) {
                    count++;
                    if (count > 1) {
                        extrasString += stringArray[j];
                        prevChar = stringArray[j];
                    }
                }
            }
        }
    }
    return '' + extrasString + ' ' + newArray.join('');
}

console.log(rmDuplicate(input))