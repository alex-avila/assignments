class Player {
    constructor(name, totalCoins) {
        this.name = this.setName(name);
        this.totalCoins = totalCoins;

        this.statusOptions = [
            'Powered Up',
            'Big',
            'Small',
            'Dead'
        ];
        this.status = this.statusOptions[0];
        this.star = false;
        this.gameIsActive = true;
    }

    setName(namePicked) {
        return namePicked;
    }

    gotHit() {
        if (this.star) {
            // Nothing happens and status is not demoted
            this.star = false;
        } else if (this.status !== 'Dead') {
            var index = this.statusOptions.indexOf(this.status);
            this.status = this.statusOptions[index + 1];
            if (this.status === 'Dead') {
                this.gameIsActive = false;
            }
        }
    }

    gotPowerup() {
        if (this.status === 'Powered Up') {
            this.star = true;
        } else {
            this.status = this.statusOptions[0];
        }
    }

    addCoins() {
        if (this.star) {
            this.star = false;
        }
        this.totalCoins += 10;
    }

    print(selection) {
        switch (selection) {
            case 0:
                this.gotHit();
                console.log('\nGot hit.');
                break;
            case 1:
                this.gotPowerup();
                console.log('\nGot power up.');
                break;
            case 2:
                this.addCoins();
                console.log('\nAdded coins.');
                break;
        }
        console.log(`\nName: ${this.name}\nCoins: ${this.totalCoins}` +
                `\nStatus: ${this.status}\nStar: ${this.star}\n`);
    }
}

var player = new Player('Waluigi', 10);
for (var i = 0; i < 3; i++) {
    player.print(randomRange(0, 2));
}


function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}