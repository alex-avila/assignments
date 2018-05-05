var ask = require('readline-sync');

// UNCERTAINTIES --> DONE
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
function whatIsTheAttackPower() {
    return random(30) + 10;
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
    hp: 200,
    inventory: ['A wooden sword', 'Tacky clothes'],
    isAlive: true
}
var monsters = [
    {
        name: 'Cthulu',
        hp: 5,
        isAlive: true
    },
    {
        name: 'A Dementor',
        hp: 5,
        isAlive: true
    },
    {
        name: 'Area X',
        hp: 1,
        isAlive: true
    }
];
var specialItems = ['One coin', 'Guns (Devil May Cry style)', 'Link\'s new outfit'];
var endSession = false;
var sheildStrength = 0.25;
var weaponStrength = 1000;
var chance = 0;
var hasWeapon = false;

// GOD ACTIONS
function giveItem() {
    player.hp += 25;
    specialItem = specialItems[random(specialItems.length)];
    specialItems = specialItems.filter(item => item != specialItem);
    player.inventory.push(specialItem);
}

// ABSTRACTED ACTIONS
function attack(victim, attacker) {
    attacker.attackPower = whatIsTheAttackPower();
    if (attacker.name === player.name) {
        var hasWeapon = attacker.inventory.some(item => item === 'Guns (Devil May Cry style)');
        if (hasWeapon) {
            victim.hp -= attacker.attackPower + Math.floor(attacker.attackPower * weaponStrength);
        } else {
            victim.hp -= attacker.attackPower;
        }
        if (victim.hp <= 0) {
            victim.hp = 0;
            die(victim);
        }
    } else {
        var hasShield = victim.inventory.forEach(item => item === 'shield' ? true : false);
        if (hasShield) {
            victim.hp -= attacker.attackPower - Math.floor(attacker.attackPower * sheildStrength);
        } else {
            victim.hp -= attacker.attackPower;
        }
        if (victim.hp <= 0) {
            victim.hp = 0;
            console.log(`${attacker.name} seems to have killed you.`);
            die(victim);
        }
    }
}
function die(who) {
    if (who.name != player.name) {
        previousHP = player.hp;
        giveItem();
        console.log(`Oh look, your hp went up from ${previousHP} to ${player.hp}`);
    }
    who.isAlive = false;
}

// PLAYER ACTIONS
function walk() {
    if (monsters.some(monster => monster.isAlive === true)) {
        if (willMonsterAppear()) {
            monsterAppeared = true;
            monster = randomMonster();
            if (willMonsterAttack()) {
                monsterAttacked = true;
                attack(player, monster);
            }
        }
    }
    else {
        console.log('Looks like all monsters are dead');
        endGame('won');
    }
}
function run() {
    escaped = Math.floor(Math.random * 2) === 0 ? true : false;
}
function checkInventory() {
    var inventory = 0;
    console.log(`HP: ${player.hp}`);
    if (player.inventory.length === 0) {
        console.log('Your inventory is empty');
    } else {
        console.log('Your inventory:');
        player.inventory.forEach(item => console.log(item));
    }
}

var chance = 0;
function confrontation() {
    confrontationChoice = ask.question('\n\n> ');
    switch (confrontationChoice.toUpperCase()) {
        case 'R':
            run();
            if (willTheyEscape()) {
                console.log('You escaped. You can continue to walk now.');
            } else {
                attack(player, monster);
                console.log(`You escaped, but not before ${monster.name} had a chance to attack you`);
                console.log(`Your HP is now ${player.hp}`);
                console.log('You must go on though');
            }
            return true;
            break;
        case 'A':
            attack(monster, player);
            if (hasWeapon) {
                console.log(`You damaged ${monster.name} for ${player.attackPower * weaponStrength} points`);
            } else {
                console.log(`You damaged ${monster.name} for ${player.attackPower} points`);
            }
            console.log(`Its HP is now ${monster.hp}`);
            return true;
            break;
        default:
            chance++;
            if (chance === 2) {
                die(player);
            } else {
                console.log('If you don\'t choose one of the options I\'m gonna kill you');
            }
    }
}

beginGame();
while(player.isAlive && !endSession) {
    choice = ask.question('\n\n> ');
    switch (choice.toUpperCase()) {
        case 'W':
            var monsterAppeared = false;
            var monsterAttacked = false;
            walk();
            if (monsterAppeared) {
                if (player.isAlive) {
                    if (monsterAttacked) {
                        console.log(`Oh no, ${monster.name} attacked you.`);
                        console.log(`Your HP is now ${player.hp}`);
                    } else {
                        console.log(`Oh no, ${monster.name} has appeared.`);
                    }
                    console.log('Run or Attack? [r/a]')
                    var confrontationChoice;
                    confrontation();
                    if (confrontationChoice.toUpperCase() != 'R' && confrontationChoice.toUpperCase() != 'A') {
                        confrontation();
                    }
                }
            } else if (!endSession) {
                console.log('You can continue to walk.')
            }
            if (!player.isAlive) {
                console.log(`You died`);
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
