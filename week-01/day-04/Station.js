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
class Station {
    constructor(gasAmount) {
        this.gasAmount = gasAmount;
    }

    refill(car) {
        this.gasAmount -= car.capacity;
        car.gasAmount += 1;
    }
}

module.exports = Station;