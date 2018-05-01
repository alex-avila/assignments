var nums = [2, 5, 100];
var people = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function doubleNumbers(nums) {
    // return nums.map(function(num){return num * 2});
    return nums.map(num => num * 2);
}
console.log(doubleNumbers(nums));

function stringItUp(nums) {
    // return nums.map(function(num){return String(num)});
    return nums.map(num => String(num));
}
console.log(stringItUp(nums));

function capitalizeNames(names) {
    // return names.map(function(name) {
    //     return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    // });
    return names.map(name => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(people) {
    // return people.map(function(person) {
    //     return person.name;
    // });
    return people.map(person => person.name);
}
console.log(namesOnly(people));


function makeStrings(people) {
    // return people.map(function(person) {
    //     if (person.age > 18) {
    //         return person.name + ' can go to The Matrix';
    //     } else {
    //         return person.name + ' is under age!!';
    //     }
    // });
    return people.map(person => {
        return person.age > 18 ? person.name + ' can go to The Matrix' : person.name + ' is under age!!'}
    );
}
console.log(makeStrings(people));

function readyToPutInTheDOM(people) {
    // return people.map(function(person) {
    //     return `<h1>${person.name}</h1><h2>${person.age}</h2>`
    // });
    return people.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
}
console.log(readyToPutInTheDOM(people));