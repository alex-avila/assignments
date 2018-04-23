var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.pop();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.push(fruit.indexOf('orange'));
console.log("fruit: ", fruit);

vegetables.push(vegetables.length);
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);
console.log('food: ', food);

food.splice(4, 2);
console.log('food: ', food);


console.log('food: ', food.reverse());

console.log('food: ', food.join(', '));
