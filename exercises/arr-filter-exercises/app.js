var nums = [3, 6, 8, 2];

function fiveAndGreaterOnly(nums) {
    return nums.filter(function(num) {
        return num > 5;
    });
}
console.log(fiveAndGreaterOnly(nums));

function evensOnly(nums) {
    return nums.filter(function(num) {
        return num % 2 === 0;
    });
}
console.log(evensOnly(nums));

function fiveCharactersOrFewerOnly(strings) {
    return strings.filter(function(string) {
        return string.length < 6;
    });
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

function peopleWhoBelongToTheIlluminati(people) {
    return people.filter(function(person) {
        if (person.member) {
            return person;
        }
    });
}
console.log(peopleWhoBelongToTheIlluminati([  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]));

function ofAge(people) {
    return people.filter(function(person) {
        if (person.age >= 18) {
            return person;
        }
    });
}
console.log(ofAge([  
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
]));