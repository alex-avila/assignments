const name = 'John'
let age = 101
const pets = ['cat', 'dog']

const petObjects = []

for ( let i = 0; i < pets.length; i++) {
    const pet = {type: pets[i]}
    if (pets[i] === 'cat') {
        pet.name = 'fluffy'
    } else {
        pet.name = 'spot'
    }
    petObjects.push(pet)
}

const carrots = ['Martin', 'Steve']
const vegetables = carrots.map(carrot => {return {type: 'carrot', name: carrot}})

const people = [{name: 'Steve Martin', friendly: true}, {name: 'Mick Jagger', friendly: false}]
friends = people.filter(person => person.friendly)

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

const greet = (firstName, lastName, age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}`

animals = [{name: 'Steve Martin', type: 'dog'}, {name: 'Mick Jagger', type: 'cat'}]
const dogs = animals.filter(animal => animal.type === 'dog')

const locationGreeting = (location, name) => {
    let greeting = `Hi ${name}!\n\nWelcome to ${location}.\n\n`
    greeting += `I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
    return greeting
}