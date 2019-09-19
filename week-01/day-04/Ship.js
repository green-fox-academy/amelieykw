'use strict';

const Pirate = require('./Pirate');

class Ship {
    constructor() {
        this.pirates = [];
        this.captain = undefined;
    }

    fillShip() {
        this.captain = new Pirate();
        let numberOfPirates = Math.floor(Math.random() * 9 + 1);
        for (let i = 0; i < numberOfPirates; i++) {
            this.pirates.push(new Pirate());
        }
    }
}