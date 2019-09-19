'use strict';

class Pirate {
    constructor() {
        this.isDrunk = false;
        this.counterOfDrink = 0;
    }

    drinkSomeRum() {
        this.counterOfDrink++;
        if (this.counterOfDrink >= 0 && this.counterOfDrink <= 4) {
            this.isDrunk = false;
        } else {
            this.isDrunk = true;
        }
    }

    howsItGoingMate() {
        if (this.isDrunk) {
            console.log("Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?");
        } else {
            console.log('Pour me anudder!');
        }
    }

    die() {
        console.log('The Pirate is dead.');
    }

    brawl(anotherPirate) {
        let chance = Math.floor(Math.random() * 3 + 1);
        if (chance == 1) {
            console.log('This Pirate wins.');
        } else if (chance == 2) {
            this.die();
        } else {
            this.die();
            anotherPirate.die();
        }
    }
}

module.export = Pirate;