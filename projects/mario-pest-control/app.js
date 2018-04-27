// DOM variables three inputs, three buttons, total elem & total coins elem
var goombaInput = document.getElementById('goomba'),
    bobombInput = document.getElementById('bobomb'),
    cheepcheepInput = document.getElementById('cheepcheep'),
    button = document.getElementsByTagName('button'),
    goombaBtn = button[0],
    bobombBtn = button[1],
    cheepcheepBtn = button[2],
    totalDiv = document.getElementById('total'),
    totalLine = document.getElementById('total-line'),
    totalCoins = document.getElementById('total-coins');

var prices = {
    goomba: 5,
    bobomb: 7,
    cheepcheep: 11
}

function createPriceLine(name, num, total, id, hasRun) {
    if (hasRun) {
        var child = document.getElementById(id)
        totalDiv.removeChild(child);
        console.log(totalDiv);
    }
    var mainDiv = document.createElement('div');
    mainDiv.className = 'line';
    mainDiv.id = id;
    var infoP = document.createElement('p');
    var infoText = document.createTextNode(`${name} × ${num}`);
    infoP.appendChild(infoText);
    var totalP = document.createElement('p');
    var totalText = document.createTextNode(`${total}`);
    totalP.appendChild(totalText);
    mainDiv.appendChild(infoP);
    mainDiv.appendChild(totalP);
    return mainDiv;
}

//variables needed to calculate total in a function
var goombaTotal = 0,
    bobombTotal = 0,
    cheepcheepTotal = 0,
    overallTotal = 0;

function calcTotal() {
    overallTotal = goombaTotal + bobombTotal + cheepcheepTotal;
    totalCoins.textContent = overallTotal + ' Coins';
}

// variable to remove children in event listeners
var gHasRun = false;
var bHasRun = false;
var cHasRun = false;

// Three event listeners for each button
goombaBtn.addEventListener('click', function() {
    // if (gHasRun) {
    //     var child = document.getElementById('goombaDiv');
    //     totalDiv.removeChild(child);
    // } else {
    //     gHasRun = true;
    // }
    // Event listener logic:
    // add node that says 'baddie x number' on the left and 'price' on the right
    goombaTotal = goombaInput.value * prices.goomba;
    var newDiv = createPriceLine('Goomba', goombaInput.value, goombaTotal, 'goombaDiv', gHasRun);
    gHasRun = true;
    totalDiv.insertBefore(newDiv, totalLine);
    // recalculate total and print it
    calcTotal();
});

bobombBtn.addEventListener('click', function() {
    bobombTotal = bobombInput.value * prices.bobomb;
    var newDiv = createPriceLine('Bob-omb', bobombInput.value, bobombTotal, 'bobombDiv', bHasRun);
    bHasRun = true;
    totalDiv.insertBefore(newDiv, totalLine);
    calcTotal();
});

cheepcheepBtn.addEventListener('click', function() {
    cheepcheepTotal = cheepcheepInput.value * prices.cheepcheep;
    var newDiv = createPriceLine('Cheep-cheep', cheepcheepInput.value, cheepcheepTotal, 'cheepcheepDiv', cHasRun);
    cHasRun = true;
    totalDiv.insertBefore(newDiv, totalLine);
    calcTotal();
});
