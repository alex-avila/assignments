// Use 'Rest Operator' to return an array of animals
const collectAnimals = (...animals) => animals


// Make a food object with the array names as properties using 'Object Literals'
const fruit = ['apple', 'pear']
const sweets = ['cake', 'pie']
const vegetables = ['carrot']

const food = {
    fruit,
    sweets,
    vegetables
}


// Use 'Destructuring' to fill in the blanks and use the properties as variables
const vacation = {
    location: 'Burly Idaho',
    duration: '2 weeks'
}

const {location, duration} = vacation

// console.log(`We're going to have a good time in ${location} for ${duration}`)


// Use 'Destructuring' to make this code ES6: const firstItem = items[0]
const items = ['sword', 'shield', 'harry potter', 'a dementor']
const [firstItem] = items
// console.log(firstItem)


// Print the expected string using 'Destructuring'
const favoriteActivitiesInOrder = [
    'magnets',
    'snowboarding',
    'philanthropy',
    'janitor work',
    'eating'
]

const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder

// console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`)


// Use the 'Rest & Spread Operators' to take numerous arrays and return only console
const combineAnimals = (...animals) => {
    // return animals.reduce((finalArr, animalsArr) => [...finalArr, ...animalsArr])
    // OR
    // return animals.reduce((finalArr, animalsArr) => finalArr.concat(animalsArr))
}

const realAnimals = ["dog", "cat", "mouse"]
const magicalAnimals = ["jackolope"]
const mysteriousAnimals = ["platypus"]
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


// Turn old functions into es6 functions
const product = (...nums) => nums.reduce((a, b) => a * b)
// console.log(product(1, 2, 3, 4))

const unshift = (arr, ...items) => items.concat(arr)
// console.log(unshift([1, 2, 3], 4, 5, 6))


// Use destructuting code to improve a function
const populatePeople = names => names.map(name => {
    name = name.split(' ')
    let [firstName, lastName] = name
    return {firstName, lastName}
})
// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
