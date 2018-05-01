var ask = require('readline-sync');
var input = ask.question('What phrase woul you like to encrypt? ');
var shift = ask.questionInt('How many letters would you like to shift? ');
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var output = '';

// My Solution:
// function caeserCipher(input, shift) {
//     var currentIndex;
//     shift = Math.floor((shift / 25 - Math.floor(shift / 25)) * 25);
//     for (var i = 0; i < input.length; i++) {
//         currentIndex = alphabet.indexOf(input[i]);
//         if (currentIndex === -1) {
//             output += input[i];
//         } else if ((currentIndex + shift) > 25) {
//             newIndex = (currentIndex + shift - 25) - 1;
//             output += alphabet[newIndex];
//         } else {
//             newIndex = currentIndex + shift;
//             output += alphabet[newIndex];
//         }
//     }
//     return output;
// }
//
// console.log(caeserCipher(input, shift));


// Better Solution:
function caeserCipher(input, shift) {
    var currentIndex;
    for (var i = 0; i < input.length; i++) {
        currentIndex = alphabet.indexOf(input[i]);
        if (currentIndex === -1) {
            output += input[i];
        } else {
            newIndex = (currentIndex + shift) % 26;
            output += alphabet[newIndex];
        }
    }
    return output;
}

console.log(caeserCipher(input, shift));













// Sudo Code:
// make a string of the alphabet
// make output variable
// loop through input
    // get index of current letter
    // add shift number to the index of current letter
        // and add the letter at that index to the string
    // if currentIndex + shift is more than 25
        // currIndex + shift - 25 equals newIndex
    // if currentIndex letter === ' '
        // add a space to output string
