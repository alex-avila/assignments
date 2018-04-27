var ask = require('readline-sync'),
    startOptions = [
        'Put hand in hole',
        'Find the key',
        'Open the door'
    ],
    continueGame = true,
    name = '',
    hasKey = false,
    isFirstRun = true;

name = ask.question('What is your name?: ');

while (name === '') {
    name = ask.question('Try again: ')
}

while (continueGame) {
    if (isFirstRun) {
        console.log(`\n${name.toUpperCase()}, you're in a locked room. Congrats!`);
        isFirstRun = false;
    } else {
        console.log(`\n${name.toUpperCase()}, you're still in a locked room. Congrats!`);
    }
    console.log(`Here are your options:`);
    var startOption = ask.keyInSelect(startOptions,
            'Which option will you choose?\n', {cancel: 'Do nothing'});

    switch (startOption) {
        case 0:
            console.log(`\n${name}. You died!\n`);
            continueGame = false;
            break;
        case 1:
            if (hasKey) {
                console.log('\nYou already found it. Why are you here?')
            } else {
                console.log('\nCool.');
                hasKey = true;
            }
            break;
        case 2:
            if (hasKey) {
                console.log(`\n${name.toUpperCase()}. You won!\n`)
                continueGame = false;
            } else {
                console.log('\nIt\'s locked.');
            }
    }
}
