'use strict';

// Sharpie Set

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

const Sharpie = require('./Sharpie');

class SharpieSet {
    constructor(sharpieList) {
        this.sharpieList = sharpieList;
    }

    countUsable() {
        let counter = 0;
        this.sharpieList.forEach((sharpie) => {
            if (sharpie.inkAmount > 0) {
                counter++;
            }
        });
        return counter;
    }

    removeTrash() {
        this.sharpieList.filter((sharpie) => sharpie.inkAmount <= 0);
        return this.sharpieList; 
    }
}

const sharpieSet = new SharpieSet();
console.log(sharpieSet.removeTrash());