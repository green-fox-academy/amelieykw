'use strict'
console.log("=================  Encapsulation and Constructor : ex 01 ==================");
// Animal

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    constructor(hunger = 50, thirst = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    get hunger() {
        return this.hunger;
    }

    eat() {
        this.hunger--;
    }

    drink() {
        this.thirst--;
    }

    play() {
        this.hunger++;
        this.drink++;
    }
}

module.exports = Animal;