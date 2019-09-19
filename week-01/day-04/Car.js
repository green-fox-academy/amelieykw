'use strict';
// Petrol Station

// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount

// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Car {
    constructor(gasAmount = 0, capacity = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }

    get gasAmount() {
        return this.gasAmount;
    }

    set gasAmount(newGasAmount) {
        this.gasAmount = newGasAmount;
    }

    get capacity() {
        return this.capacity;
    }
}