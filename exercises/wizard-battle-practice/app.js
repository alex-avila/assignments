var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]  

wizards.forEach(function(wizard) {
    console.log(wizard);
});

var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ];

wizards.forEach(function(wizard) {
    console.log(wizard.name);
});

wizards.forEach(function(wizard) {
    wizard.isAlive = true;
});

var neutralGoods = [];
wizards.forEach(function(wizard) {
    if (wizard.alignment === 'neutral good') {
        neutralGoods.push(wizard);
    }
});

var lawfulGood = wizards.findIndex(function(wizard) {
    return wizard.alignment === 'lawful good';
});

var areAlive = wizards.every(function(wizard) {
    return wizard.isAlive === true;
});

var isOneNeutralGood = wizards.some(function(wizard) {
    return wizard.alignment === 'neutral good';
});

wizards.forEach(function(wizard) {
    return wizard.alignment === 'neutral good' ? wizard.isAlive = false : wizard.isAlive = true;
});

areAlive = wizards.every(function(wizard) {
    return wizard.isAlive === true;
});

var isOneAlive = wizards.some(function(wizard) {
    return wizard.isAlive === true;
});


