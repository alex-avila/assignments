// Preliminaries
console.log(5 > 3 ? 'is greater than' : null);

console.log('cat'.length === 3 ? 'is the length' : null);

console.log('cat' === 'dog' ? null : 'not the same');

//Bronze Medal
var person = {
    name: 'Bobby',
    age: 12
}

console.log(person.age >= 17 ? person.name + " is allowed to go to the movie" :
            person.name + " is not allowed to go to the movie");

console.log(person.name[0] === 'B' ? person.name +
            " is allowed to go to the movie" : null);


console.log(person.name[0] === 'B' && person.age > 18 ? person.name + " is allowed to go to the movie" : person.name + " is not allowed to go to the movie");


//Silver Medal
//if (1 === '1') {
//    console.log('strict');
//} else if (1 == '1') {
//    console.log('abstract')
//} else {
//    console.log('not equal at all');
//}

console.log(1 === '1' ? 'strict' : 1 == '1' ? 'abstract' : 'not equal at all');

console.log((1 <= 2 && 2 === 4) || (3 * 4 > 10 && 5 + 10 > 10) ? 'yes' : 'no');



//Gold Metal
console.log(typeof 'dog' === 'string' ? 'dog is a string' : 'dog is not a string');

console.log(typeof 'true' === 'boolean' ? 'true is a boolean' : 'true is not a boolean');

var hey = 'hey';
console.log(hey == null ? 'hey is undefined' : 'hey is defined');

console.log('A' > 0  ? 'z is greater than 12' : 's is not greater than 11');

var myNum = 7;
console.log(myNum % 2 === 0 ? 'even': 'odd');
