const flipCoin = () => Math.random() > 0.5 ? 'heads' : 'tails'

class Party {
    constructor(name) {
        this.name = name
        this.population = 1000000
    }
    sendNuke(party, onHit, onMiss) {
        if (flipCoin() === 'heads') {
            onHit(party)
        } else {
            onMiss(party)
        }
    }
}

const penguins = new Party('Penguins')
const communists = new Party('Communists')

if (flipCoin() === 'heads') {
    // communists send nuke
    communists.sendNuke(penguins, onHit, onMiss)
} else {
    // penguins send nuke
    penguins.sendNuke(communists, onHit, onMiss)
}















const flipCoin = () => Math.random() > 0.5 ? 'heads' : 'tails'

class Party {
    constructor(name) {
        this.name = name
        this.population = 1000000
    }
    sendNuke(party, action) {
        action(party);
    }
}

const penguins = new Party('Penguins')
const communists = new Party('Communists')

if (flipCoin() === 'heads') {
    // communists send nuke
    if (flipCoin() === 'heads') {
        communists.sendNuke(penguins, onHit)
    } else {
        communists.sendNuke(penguins, onMiss)
    }
} else {
    // penguins send nuke
    if (flipCoin() === 'heads') {
        penguins.sendNuke(communists, onHit)
    } else {
        penguins.sendNuke(communists, onMiss)
    }
}