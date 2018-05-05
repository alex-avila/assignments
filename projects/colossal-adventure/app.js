var ask = require('readline-sync');

// ALGORITHMS
function randomChance(odds) {
    return Math.floor(Math.random() * odds) === 0 ? true : false;
}

function random(length) {
    return Math.floor(Math.random() * length);
}

function willMonsterAppear() {
    return randomChance(3);
}

function randomMonster() {
    var liveMonsters = monsters.filter(monster => monster.isAlive === true);
    return liveMonsters[random(liveMonsters.length)];
}

function willMonsterAttack() {
    return randomChance(2);
}

function willTheyEscape() {
    return randomChance(2);
}

function getAttackPower(attacker) {
    return random(30) + attacker.baseAttack;
}


// GAME STEPS
function beginGame() {
    console.log('Hello. This is a game.');
    player.name = ask.question('What is your name? ');
    console.log(`\nHello ${player.name}. You can walk or you can check your inventory [w/i]`);
}

function endGame(how) {
    if (how === 'won') {
        console.log('You won');
        endSession = true;
    } else if (how === 'death') {
        console.log('You died');
        player.isAlive = false;
    } else if (how === 'quit') {
        console.log('Are you sure you want to quit? [y/N]')
        if (ask.question('\n\n> ').toUpperCase() === 'Y') {
            endSession = true;
        } else {
            console.log('Let\'s continue then.')
        }
    }
}


// VARIABLES
var player = {
        name: '',
        hp: 100,
        baseAttack: 30,
        inventory: [
            {
                type: 'weapon',
                name: 'A wooden sword',
                description: 'The most basic sword you could possibly have'
        },
            {
                type: 'sheild',
                name: 'Tacky clothes',
                description: 'Please change your outfit. It looks horrible and it has no effect'
        }
    ],
        isAlive: true
    },
    monsters = [
        {
            name: 'Cthulu',
            hp: 50,
            baseAttack: 10,
            isAlive: true
        },
        {
            name: 'Dementor #12',
            hp: 25,
            baseAttack: 5,
            isAlive: true
        },
        {
            name: 'Area X',
            hp: 100,
            baseAttack: 15,
            isAlive: true
        }
    ],
    specialItems = [
        {
            weapon: 'unique',
            name: 'A coin',
            description: 'An extra life'
        },
        {
            type: 'weapon',
            name: 'Devil May Cry Guns',
            description: 'Increases your attack power by 25%'
        },
        {
            type: 'shield',
            name: 'Link\'s new outfit',
            description: 'Decreases damage taken by 12%'
        },
        {
            type: 'weapon',
            name: 'Mario\'s Cap',
            description: 'Increases your attack power by 25%'
        }
    ],
    endSession = false;

// GOD ACTIONS
function giveHPAndItem() {
    // Give health
    player.hp += 25;
    // Give random item and remove it from specialItems
    specialItem = specialItems[random(specialItems.length)];
    specialItems = specialItems.filter(item => item != specialItem);
    player.inventory.push(specialItem);
}

function createMonster() {
    monsterAppeared = true;
    monster = randomMonster();
}


// ABSTRACTED ACTIONS
function attack(victim, attacker) {
    attacker.attackPower = getAttackPower(attacker);
    victim.hp -= attacker.attackPower;
    if (victim.name === player.name) {
        console.log(`Oh no, ${monster.name} attacked you for ${attacker.attackPower} points`);
    } else {
        console.log(`You damaged ${victim.name} for ${attacker.attackPower} points`);
    }
    var survived = victim.hp > 0;
    if (!survived) {
        victim.hp = 0;
        if (victim.name === player.name) {
            console.log(`${attacker.name} seems to have killed you.`);
            endGame('death');
        } else {
            console.log(`You killed ${victim.name}`);
            die(victim);
        }
    } else if (survived) {
        if (victim.name === player.name) {
            console.log(`Your HP is now ${player.hp}`);
        } else {
            console.log(`Its HP is now ${monster.hp}`);
        }
    }
}

function die(who) {
    if (who.name != player.name) {
        previousHP = player.hp;
        giveHPAndItem();
        console.log(`Oh look, your hp went up from ${previousHP} to ${player.hp}`);
    }
    who.isAlive = false;
}


// PLAYER ACTIONS
function walk() {
    if (monsters.some(monster => monster.isAlive === true)) {
        var monsterAppeared = willMonsterAppear();
        if (monsterAppeared) {
            createMonster();
            if (willMonsterAttack()) {
                attack(player, monster);
            } else {
                console.log(`Oh no, ${monster.name} has appeared.`);
            }
        } else if (!monsterAppeared) {
            console.log('Just walk. Nothing else is happening.');
        }
    } else {
        console.log('Looks like all monsters are dead');
        endGame('won');
    }
}

function run() {
    var escaped = randomChance(2) ? true : false;
    if (escaped) {
        console.log('You escaped. You can continue to walk now.');
    } else {
        console.log(`You attempt to escape, but not before ${monster.name} has a chance to attack you.`);
        attack(player, monster);
        if (player.isAlive) {
            console.log('Luckily, you survived');
        }
    }
}

function checkInventory() {
    var inventory = 0;
    console.log(`Name: ${player.name}\nHP: ${player.hp}`);
    console.log('Inventory:');
    player.inventory.forEach(item => console.log(`- ${item.name}`));
}

var indecisionCount = 0;

function confrontation() {
    console.log('Run or attack? [r/a]');
    choice = ask.question('\n\n> ');
    switch (choice.toUpperCase()) {
        case 'R':
            indecisionCount = 0;
            run();
            break;
        case 'A':
            indecisionCount = 0;
            console.log(`You decided to attack ${monster.name}.`);
            attack(monster, player);
            if (monster.isAlive) {
                console.log(`But ${monster.name} decided to attack you back.`);
                attack(player, monster);
            }
            break;
        default:
            indecisionCount++;
            if (indecisionCount === 2) {
                endGame('death');
            } else {
                console.log('If you don\'t choose one of the options I\'m gonna kill you');
            }
    }
}


beginGame();
while (player.isAlive && !endSession) {
    choice = ask.question('\n\n> ');
    switch (choice.toUpperCase()) {
        case 'W':
            var monsterAppeared = false;
            walk();
            if (monsterAppeared && player.isAlive) {
                confrontation();
                if (indecisionCount != 0) {
                    confrontation();
                } else if (player.isAlive) {
                    console.log('\nKeep walking.');
                }
            }
            break;
        case 'I':
            checkInventory();
            break;
        case 'Q':
            endGame('quit');
            break;
        default:
            console.log('Pardon?')
            break;
    }
}
