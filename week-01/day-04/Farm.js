'use strict';
// Farm
// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

const Animal = require('./Animal');

class Farm {
    constructor(animals, slots) {
        this.animals = animals;
        this.slots = slots;
    }

    breed() {
        if (this.slots.length > this.animals.length) {
            this.animals.push(new Animal());
        }
    }

    slaughter() {
        let minHunger = this.animals[0].hunger;
        let minHungerAnimal = this.animals[0];
        this.animals.forEach(element => {
            if (element.hunger < minHunger) {
                minHunger = element.hunger;
                minHungerAnimal = element;
            }
        });
        return minHungerAnimal;
    }
}
