// DOM variables three inputs, three buttons, total elem & total coins elem
const goombaInput = document.getElementById('goomba'),
    bobombInput = document.getElementById('bobomb'),
    cheepcheepInput = document.getElementById('cheepcheep'),
    button = document.getElementsByTagName('button'),
    goombaBtn = button[0],
    bobombBtn = button[1],
    cheepcheepBtn = button[2],
    totalDiv = document.getElementById('total'),
    totalLine = document.getElementById('total-line'),
    totalCoins = document.getElementById('total-coins');

const prices = {
    goomba: 5,
    bobomb: 7,
    cheepcheep: 11
}

const createPriceLine = (name, num, total, id, hasRun) => {
    if (hasRun) {
        const child = document.getElementById(id)
        totalDiv.removeChild(child);
        console.log(totalDiv);
    }
    let mainDiv = document.createElement('div');
    mainDiv.className = 'line';
    mainDiv.id = id;
    let infoP = document.createElement('p');
    let infoText = document.createTextNode(`${name} × ${num}`);
    infoP.appendChild(infoText);
    let totalP = document.createElement('p');
    let totalText = document.createTextNode(`${total}`);
    totalP.appendChild(totalText);
    mainDiv.appendChild(infoP);
    mainDiv.appendChild(totalP);
    return mainDiv;
}

//variables needed to calculate total in a function
let goombaTotal = 0,
    bobombTotal = 0,
    cheepcheepTotal = 0,
    overallTotal = 0;

const calcTotal = () => {
    overallTotal = goombaTotal + bobombTotal + cheepcheepTotal;
    totalCoins.textContent = overallTotal + ' Coins';
}

// variable to remove children in event listeners
let gHasRun = false;
let bHasRun = false;
let cHasRun = false;

// Three event listeners for each button
goombaBtn.addEventListener('click', () => {
    // if (gHasRun) {
    //     var child = document.getElementById('goombaDiv');
    //     totalDiv.removeChild(child);
    // } else {
    //     gHasRun = true;
    // }
    // Event listener logic:
    // add node that says 'baddie x number' on the left and 'price' on the right
    goombaTotal = goombaInput.value * prices.goomba;
    let newDiv = createPriceLine('Goomba', goombaInput.value, goombaTotal, 'goombaDiv', gHasRun);
    gHasRun = true;
    totalDiv.insertBefore(newDiv, totalLine);
    // recalculate total and print it
    calcTotal();
});

bobombBtn.addEventListener('click', () => {
    bobombTotal = bobombInput.value * prices.bobomb;
    let newDiv = createPriceLine('Bob-omb', bobombInput.value, bobombTotal, 'bobombDiv', bHasRun);
    bHasRun = true;
    totalDiv.insertBefore(newDiv, totalLine);
    calcTotal();
});

cheepcheepBtn.addEventListener('click', () => {
    cheepcheepTotal = cheepcheepInput.value * prices.cheepcheep;
    var newDiv = createPriceLine('Cheep-cheep', cheepcheepInput.value, cheepcheepTotal, 'cheepcheepDiv', cHasRun);
    cHasRun = true;
    totalDiv.insertBefore(newDiv, totalLine);
    calcTotal();
});
