// Preliminaries
for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var i = 9; i >= 0; i--) {
  console.log(i);
}

var fruit = ['banana', 'orange', 'apple', 'kiwi'];
for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// Bronze Medal
var arr1 = [];
for (var i = 0; i < 10; i++) {
  arr1.push(i);
}
console.log(arr1);

for (var i = 0; i <= 100; i += 2) {
  console.log(i);
}

var arr2 = [];
var fruit2 = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
for (var i = 1; i < fruit2.length; i += 2) {
  arr2.push(fruit2[i]);
}
console.log(arr2);

// Silver Medal
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for (var i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}

var names = [],
    occupations = [];
for (var i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

var names2 = [],
    occupations2 = [];
for (var i = 1; i < peopleArray.length; i += 2) {
  names2.push(peopleArray[i].name);
  occupations2.push(peopleArray[i].occupation);
}
console.log(names2);
console.log(occupations2);

// Gold Medal
var arr3 = [];
for (var i = 0; i < 3; i++) {
  arr3.push([]);
  for (var j = 0; j < 3; j++) {
    arr3[i].push(0);
  }
}
console.log(arr3);

var arr4 = [];
for (var i = 0; i < 3; i++) {
  arr4.push([]);
  for (var j = 0; j < 3; j++) {
    arr4[i].push(i);
  }
}
console.log(arr4);

var arr5 = [];
for (var i = 0; i < 3; i++) {
  arr5.push([]);
  for (var j = 0; j < 3; j++) {
    arr5[i].push(j);
  }
}
console.log(arr5);

// iterate through first level then iterate to second level and for each item
// in the second level replace that value at that index with an 'x'
for (var i = 0; i < arr5.length; i++) {
  for (var j = 0; j < arr5[i].length; j++) {
    arr5[i][j] = 'x';
  }
}
console.log(arr5);
