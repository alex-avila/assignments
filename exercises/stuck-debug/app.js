var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while (option != 'fight bears') {
    optionIndex = ask.keyInSelect(options, "What would you like to do today?: ");
    option = options[optionIndex];
    if (option === 'pick flowers') {
        console.log("You pick some flowers. You make a bouquet.");
    } else if (option === "shoot guns") {
        console.log("You shoot guns.");
    } else if (option === "fight bears"){
        console.log("You fought a bear and got beat up!");
    } else {
        console.log("I know choices are hard, but choose something.")
    }
}
