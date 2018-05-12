// const flipCoin = () => Math.random() > 0.5 ? 'heads' : 'tails'

// class Party {
//     constructor(name) {
//         this.name = name
//         this.population = 1000000
//     }
//     sendNuke(party, onHit, onMiss) {
//         if (flipCoin() === 'heads') {
//             onHit(party)
//         } else {
//             onMiss(party)
//         }
//     }
// }

// function onHit(party) {
//     party.population -= Math.floor(Math.random() * (1000000 - 100000) - 1) + 100000
// }

// const penguins = new Party('Penguins')
// const communists = new Party('Communists')

// if (flipCoin() === 'heads') {
//     // communists send nuke
//     communists.sendNuke(penguins, onHit, onMiss)
// } else {
//     // penguins send nuke
//     penguins.sendNuke(communists, onHit, onMiss)
// }






// const war = setInterval(function() {
//     let self = this

// })








const flipCoin = () => Math.random() > 0.5 ? 'heads' : 'tails'

class Party {
    constructor(name) {
        this.name = name
        this.population = 1000000
    }
    sendNuke(party, action) {
        action(party);
        // if (party.population > 0) {
        //     if (flipCoin() === 'heads') {
        //         party.sendNuke(this, onHit)
        //         // party.sendNuke(this, onHit)
        //     } else {
        //         party.sendNuke(this, onHit)
        //         // party.sendNuke(this, onMiss)
        //     }
        // } else {
        //     console.log(`${party.name} died`)
        // }
    }
}

const penguins = new Party('Penguins')
const communists = new Party('Communists')
let currentParty,
    myParty;

if (flipCoin() === 'heads') {
    // communists send nuke
    // if (flipCoin() === 'heads') {
    //     communists.sendNuke(penguins, onHit)
    // } else {
    //     communists.sendNuke(penguins, onMiss)
    // }
    currentParty = penguins
    myParty = communists
} else {
    // penguins send nuke
    // if (flipCoin() === 'heads') {
    //     penguins.sendNuke(communists, onHit)
    // } else {
    //     penguins.sendNuke(communists, onMiss)
    // }
    currentParty = communists
    myParty = penguins
}

function onHit(party) {
    party.population -= Math.floor(Math.random() * (1000000 - 100000) - 1) + 100000
    console.log(`${party.name} were attacked.`)    
}

function onMiss(party) {
    console.log(`${party.name} were not attacked.`)
}

const war = setInterval(function() {
    if (currentParty === penguins) {
        currentParty = communists
        myParty = penguins
    } else {
        currentParty = penguins
        myParty = communists
    }
    if (flipCoin() === 'heads') {
        myParty.sendNuke(currentParty, onHit);
    } else {
        myParty.sendNuke(currentParty, onMiss);
    }
    if (currentParty.population <= 0) {
        console.log(`${currentParty.name} are dead`)
        console.log(`${myParty.name}: ${myParty.population}\n${currentParty.name}: ${currentParty.population}`)
        clearInterval(this);
    }
}, 1000)