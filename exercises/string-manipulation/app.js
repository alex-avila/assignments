var ask = require('readline-sync');
console.log('Hello! My name is Betty. Help me get to know you!\n');
var firstName = ask.question('What is your first name?\n>> ');
var lastName = ask.question('And your last name?\n>> ');
var name = firstName + ' ' + lastName
console.log(`Cool. Nice to meet you ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);

var story = ask.question('\nTell me a story in about 140 characters or less\n>> ');
if (story.length <= 140) {
    if (story.length < 20) {
        story = ask.question('You followed the instructions, but your story is too short. Tell me another one.\n>> ');
        while (story.length < 20) {
            story = ask.question('Try again.\n\t');
        }
    }
} else {
    console.log(`You didn't follow the instructions. Your story was more than 140 characters (${story.length} to be precise).`);
    story = ask.question('Try again.\n>> ');
    if (story.length < 20) {
        story = ask.question('You followed the instructions, but your story is too short. Tell me another one. \n>> ');
        while (story.length < 20) {
            story = ask.question('Try again.\n>> ');
        }
    }
}


console.log(`\nGood job. Your story was less than or equal to 140 characters (${story.length} to be exact).`);
console.log('It\'s too long though and I don\'t want to read it.');
console.log(`Instead, I'll only read the last half. Which is:\n\n\t${story.slice(story.length / 2)}\n`);
console.log('very interesting...\n');

var startIndex = ask.questionInt('Now you read it. From where do you want to start reading?\n>> ');
console.log('O.K.\n\n\t' + story.slice(startIndex));
console.log('\nBYE.')