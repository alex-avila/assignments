var ask = require('readline-sync');
var chalk = require('chalk');

var log = console.log;

// ALGORITHMS --> DONE
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

function getAttackPower(attacker) {
    return random(30) + attacker.baseAttack;
}


// GAME STEPS
function beginGame() {
    log(chalk.bold('\nWELCOME TO POCKET MONSTERS: THE GAME'));
    log('\nYou are a pocket monster. The yellow one.');
    log('You\'ve just finished your shift filming for pokemon.');
    log('You want to go home, but three prisoners have escaped nearby.');
    log('\nYou will encounter them and have the choice to attack or run');
    log('While nothing is happening, however, you will simply');
    log('continue walking home. \n\nYou win when you get home safely\n');
    player.name = ask.question('I forgot what you\'re name was though. Can you remind me?\n\n> ');
    if (player.name.toUpperCase() != 'PIKACHU') {
        log(`Hmm, I don't remember ${chalk.bold(player.name)} being your name. Anyway...`);
        // Give common inventory
        player.inventory = [
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
        ];
    } else {
        log(`Oh, right. how could I have forgotten that ${chalk.bold(player.name)} is your name.`);
        // Give special inventory
        player.inventory = [
            {
                type: 'weapon',
                name: 'Electricity',
                description: 'Since you are pikachu, you have electricity as an attack'
            },
            {
                type: 'sheild',
                name: 'Fur',
                description: 'Your yellow fur protects you. Damaged taken is reduced by 12%'
            }
        ];
    }
    player.name = chalk.bold(player.name);
    log('You can either choose to walk or check your inventory. [w/i]');
}

function endGame(how) {
    if (how === 'won') {
        log(chalk.bgGreen.black.bold('You won'));
        endSession = true;
    } else if (how === 'death') {
        log(chalk.bgRed.white.bold('You died'));
        player.isAlive = false;
    } else if (how === 'quit') {
        log('Are you sure you want to quit? [y/N]')
        if (ask.question('\n\n> ').toUpperCase() === 'Y') {
            endSession = true;
        } else {
            log('Let\'s continue then.')
        }
    } else if (how === 'home') {
        log('Oh, look. You\'re home.');
        log(chalk.bgGreen.black.bold('You won'));
        endSession = true;
    }
}

function updateProgressBar() {
    var progressBar = '|';
    for (var i = 0; i < absDistance; i++) {
        if (i === (location - 1)) {
            progressBar += chalk.inverse('x');
        } else {
            progressBar += '-';
        }
    }
    progressBar += '|';
    return progressBar;
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
            name: chalk.red('Cthulu'),
            hp: 50,
            baseAttack: 10,
            isAlive: true
        },
        {
            name: chalk.red('Dementor #12'),
            hp: 30,
            baseAttack: 5,
            isAlive: true
        },
        {
            name: chalk.red('Area X'),
            hp: 100,
            baseAttack: 20,
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
    endSession = false,
    absDistance = 10,
    location = 0;
//    progressLine = createProgressBar();

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
    var printAttackPower = chalk.hex('#6c25de')(attacker.attackPower);
    victim.hp -= attacker.attackPower;
    if (victim.name === player.name) {
        log(`Oh no, ${attacker.name} attacked you for ${printAttackPower} points`);
    } else {
        log(`You damaged ${victim.name} for ${printAttackPower} points`);
    }
    var survived = victim.hp > 0;
    if (!survived) {
        victim.hp = 0;
        if (victim.name === player.name) {
            log(`${attacker.name} seems to have killed you.`);
            endGame('death');
        } else {
            log(`You killed ${victim.name}`);
            die(victim);
        }
    } else if (survived) {
        if (victim.name === player.name) {
            log(chalk`Your HP is now {green.bold ${player.hp}}`);
        } else {
            log(chalk`Its HP is now {green ${monster.hp}}`);
        }
    }
}

function die(who) {
    if (who.name != player.name) {
        previousHP = player.hp;
        giveHPAndItem();
        log(chalk`Oh look, your hp went up from {green ${previousHP}} to {green.bold ${player.hp}}`);
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
                log(`Oh no, ${monster.name} has appeared.`);
            }
        } else if (!monsterAppeared) {
            log('No prisoner appeared. You may continue.');
        }
    } else {
        log('Looks like all monsters are dead');
        endGame('won');
    }
}

function run() {
    var escaped = randomChance(2) ? true : false;
    if (escaped) {
        log('You escaped. You can continue to walk now.');
    } else {
        log(`You attempt to escape, but not before ${monster.name} has a chance to attack you.`);
        attack(player, monster);
        if (player.isAlive) {
            log('Luckily, you survived');
        }
    }
}

function checkInventory() {
    var inventory = 0;
    log(`Name: ${player.name}\nHP: ${player.hp}`);
    log('Inventory:');
    player.inventory.forEach(item => log(`- ${item.name}`));
}

var indecisionCount = 0;

function confrontation() {
    log('Run or attack? [r/a]');
    choice = ask.question('\n\n> ');
    switch (choice.toUpperCase()) {
        case 'R':
            indecisionCount = 0;
            run();
            break;
        case 'A':
            indecisionCount = 0;
            attack(monster, player);
            if (monster.isAlive) {
                log(`But ${monster.name} decided to attack you back.`);
                attack(player, monster);
            }
            break;
        default:
            indecisionCount++;
            if (indecisionCount === 2) {
                endGame('death');
            } else {
                log('If you don\'t choose one of the options I\'m gonna kill you');
            }
    }
}

function updateLocation() {
    location++;
    if (location === absDistance) {
        log(updateProgressBar());
        endGame('home');
    } else {
        log(updateProgressBar());
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
                // if monster appeared do the following
                confrontation();
                if (indecisionCount != 0) {
                    confrontation();
                } else if (player.isAlive) {
                    // If after the confrontation player is alive
                    // update location
                    log('Keep walking');
                    updateLocation();
                }
            } else if (!monsterAppeared) {
                // if monster didn't appear update location
                updateLocation();
            }
            break;
        case 'I':
            checkInventory();
            break;
        case 'Q':
            endGame('quit');
            break;
        default:
            log('Pardon?')
            break;
    }
}