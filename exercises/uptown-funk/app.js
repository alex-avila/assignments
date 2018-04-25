var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

//function print(array) {
//    console.log(array.join(' '));
//}
var print = array => {console.log(array.join(' '))}

//function printBackwards(array) {
//    console.log(array.reverse().join(' '));
//}
var printBackwards = array => {console.log(array.reverse().join(' '))};

//function printOddWords(array) {
//    array.reverse();
//    var oddWords = [];
//    for (var i = 0; i < array.length; i += 2) {
//        oddWords.push(array[i]);
//    }
//    console.log(oddWords.join(' '));
//}
var printOddWords = array => {
    array.reverse();
    var oddWords = [];
    for (var i = 0; i < array.length; i += 2) {
        oddWords.push(array[i]);
    }
    console.log(oddWords.join(' '));
};

//function reverseEveryTwo(array) {
//    var newArray = [];
//    for (var i = 0; i < array.length; i += 2) {
//        newArray.push(array[i + 1], array[i]);
//    }
//    console.log(newArray.join(' '));
//}
var reverseEveryTwo = array => {
    var newArray = [];
    for (var i = 0; i < array.length; i += 2) {
        newArray.push(array[i + 1], array[i]);
    }
    console.log(newArray.join(' '));
};

print(lyrics);
console.log('\n');
printBackwards(lyrics);
console.log('\n');
printOddWords(lyrics);
console.log('\n');
reverseEveryTwo(lyrics);