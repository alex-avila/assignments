function leastToGreatest(arr) {
    return arr.sort((a, b) => {
        // if 'a' is larger put 'a' towards the end
        return a - b;
    });
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));


function greatestToLeast(arr) {
    return arr.sort((a, b) => {
        // if 'b' is larger put 'a' towards the end
        return b - a;
    });
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));


function lengthSort(arr) {
    return arr.sort((a, b) => {
        // same idea as 'leastToGreatest()'
        return a.length - b.length;
    });
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));


function alphabetical(arr) {
    return arr.sort((a, b) => {
        // if string 'a' is larger, put it towards the end
        return a > b;
    });
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));


function byAge(arr) {
    return arr.sort((a, b) => {
        // same idea as leastToGreatest()
        return a.age - b.age;
    });
}

console.log(byAge([  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]));