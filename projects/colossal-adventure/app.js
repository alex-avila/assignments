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
    log('\nIf you encounter them, you have the choice to attack or run');
    log('While nothing is happening, however, you will simply');
    log('continue walking home. \n\nYou win when you get home safely\n');
    player.name = ask.question('I forgot what you\'re name was though. Can you remind me?\n\n\n> ');
    if (player.name.toUpperCase() != 'PIKACHU' && player.name.toUpperCase() != 'TIMMY') {
        player.name = 'Timmy';
        log(`Hello ${chalk.bold(player.name)}.`);
        // Give common inventory
        player.inventory = [
            {
                type: 'common',
                name: 'A wooden sword',
                description: 'The most basic sword you could possibly have'
            },
            {
                type: 'common',
                name: 'Tacky clothes',
                description: 'Please change your outfit. It looks horrible and it has no effect'
            }
        ];
    } else {
        player.name = 'Pikachu';
        log(`Oh, right. how could I have forgotten that ${chalk.bold(player.name)}'s your name.`);
        // Give special inventory
        player.inventory = [
            {
                type: 'weapon',
                name: 'Electricity',
                description: 'Since you are pikachu, you have electricity. Increases your attack power by 12%',
                attack: 0.12
            },
            {
                type: 'shield',
                name: 'Fur',
                description: 'Your yellow fur protects you. Damaged taken is reduced by 12%',
                shield: 0.12
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
        if (player.inventory.some(item => item.name === 'A coin')) {
            log(`You died`);
            log(`...but you had the coin with you, so you get another chance`);
            player.hp = 150;
            player.isAlive = true;
        } else {
            log(chalk.bgRed.white.bold('You died'));
            player.isAlive = false;
        }
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
        isAlive: true
    };
var monsters = [
        {
            name: chalk.red('Cthulu'),
            hp: 100,
            baseAttack: 20,
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
            hp: 150,
            baseAttack: 30,
            isAlive: true
        }
    ];
var specialItems = [
        {
            weapon: 'unique',
            name: 'A coin',
            description: 'Unknown'
        },
        {
            type: 'weapon',
            name: 'Devil May Cry Guns',
            description: 'Increases your attack power by 50%',
            attack: 0.5
        },
        {
            type: 'shield',
            name: 'Link\'s new outfit',
            description: 'Decreases damage taken by 50%',
            shield: 0.5
        },
        {
            type: 'weapon',
            name: 'Mario\'s Cap',
            description: 'Increases your attack power by 50%',
            attack: 0.55
        }
    ];
var endSession = false,
    absDistance = 20,
    location = 0;

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
function die(who) {
    if (who.name != player.name) {
        previousHP = player.hp;
        giveHPAndItem();
        log(chalk`Oh look, your hp went up from {green ${previousHP}} to {green.bold ${player.hp}}`);
        var newItem = player.inventory[player.inventory.length - 1];
        log(chalk`And you gained:\n- ${newItem.name}\n- - ${newItem.description}`);
    }
    who.isAlive = false;
}


// MONSTER ACTIONS
function mAttack() {
    var shieldEffect = 0
    var shields = [];
    // if an item in inventory has an attack prop, reset weaponEffect
    if (player.inventory.some(item => item.shield)) {
        var filteredInventory = player.inventory.filter(item => {
            return item.type === 'shield';
        });
        filteredInventory.forEach(item => {
            shields.push(item.shield);
        });
        shieldEffect = shields.reduce((a, b) => a - b);
    }
    monster.attackPower = getAttackPower(monster)
    monster.attackPower -= Math.floor(monster.attackPower * shieldEffect);
    player.hp -= monster.attackPower;
    var printAttackPower = chalk.hex('#6c25de')(monster.attackPower);
    log(`Oh no, ${monster.name} attacked you for ${printAttackPower} points`);
    if (player.hp <= 0) {
        player.hp = 0;
        log(`${monster.name} seems to have killed you.`);
        endGame('death');
    } else {
        log(chalk`Your HP is now {green.bold ${player.hp}}`);
    }
}


// PLAYER ACTIONS
function walk() {
    if (monsters.some(monster => monster.isAlive === true)) {
        var monsterAppeared = willMonsterAppear();
        if (monsterAppeared) {
            createMonster();
            if (willMonsterAttack()) {
                mAttack(); // CHANGED
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
        mAttack(); // CHANGED
        if (player.isAlive) {
            log('Luckily, you survived');
        }
    }
}

function attack() {
    var weaponEffect = 0
    var weaponsPower = [];
    // if an item in inventory has an attack prop, reset weaponEffect
    if (player.inventory.some(item => item.attack)) {
        player.inventory.filter(item => {
            return item.type === 'weapon';
        }).forEach(item => {
            weaponsPower.push(item.attack);
        });
        weaponEffect = weaponsPower.reduce((a, b) => a - b);
    }
    player.attackPower = getAttackPower(player);
    player.attackPower += Math.floor(player.attackPower * weaponEffect);
    var printAttackPower = chalk.hex('#6c25de')(player.attackPower);
    monster.hp -= player.attackPower;
    log(`You damaged ${monster.name} bt ${printAttackPower} points`);
    if (monster.hp <= 0) {
        monster.hp = 0;
        log(`You killed ${monster.name}`);
        die(monster);
    } else {
        log(chalk`Its HP is now {green ${monster.hp}}`);
    }
}

function checkInventory() {
    var inventory = 0;
    log(`Name: ${player.name}\nHP: ${player.hp}`);
    log('Inventory:');
    player.inventory.forEach(item => log(`- ${item.name}\n- - ${item.description}`));
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
            attack(); // CHANGED
            if (monster.isAlive) {
                log(`But ${monster.name} decided to attack you back.`);
                mAttack(); // CHANGED
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
            } else if (!monsterAppeared && !endSession) {
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