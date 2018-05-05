var axios = require('axios');

function total(arr) {
    return arr.reduce((a, b) => a + b);
}

console.log(total([1, 2, 3]));


function stringConcat(arr) {
    return arr.reduce((a, b) => a + b, '');
}

console.log(stringConcat([1, 2, 3]));


function totalVotes(arr) {
    return arr.reduce((a, b) => b.voted ? a += 1 : a, 0);
    // OR
    // return arr.filter(person => person.voted).length;
    // OR
    // var votedCount = 0;
    // arr.forEach(person => person.voted ? votedCount++ : votedCount);
    // return votedCount;
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters));


function shoppingSpree(arr) {
    return arr.reduce((a, b) => a + b.price, 0);
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)) // 227005 


function flatten(arr) {
    return arr.reduce((a, b) => a.concat(b), []);
}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));

var results = {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0
};

function withinRange(min, max, age) {
    return age >= min && age <= max;
}

function voterResults(arr) {
    return arr.reduce((a, b) => {
        if (withinRange(18, 25, b.age)) {
            a.youth += 1;
            if (b.voted) {
                a.youngVotes += 1;
            }
        }
        if (withinRange(26, 35, b.age)) {
            a.mids += 1;
            if (b.voted) {
                a.midVotes += 1;
            }
        }
        if (withinRange(36, 55, b.age)) {
            a.olds += 1;
            if (b.voted) {
                a.oldVotes += 1;
            }
        }
        return a;
    }, results);
}

console.log(voterResults(voters));


axios.get('https://api.github.com/users/alex-avila/repos').then(function(response) {
    var watchersCount = response.data.reduce((a, b) => {
        return a + b.watchers_count
    }, 0);
    console.log(watchersCount);
})