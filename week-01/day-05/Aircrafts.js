'use strict';
// Aircrafts
// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition
// F16
// Max ammo: 8
// Base damage: 30
// F35
// Max ammo: 12
// Base damage: 50
// All aircrafts should be created with an empty ammo storage

// Methods
// fight
// It should use all the ammo (set it to 0) and it should return the damage it deals
// The damage dealt is calculated by multiplying the base damage by the ammunition
// refill
// It should take a number as parameter and subtract as much ammo as possible
// It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
// It should return the remaining ammo
// Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
// getType
// It should return the type of the aircraft as a string
// getStatus
// It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
// isPriority
// It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16

let typeOfAircraft = {
    F16: {
        'Max ammo': 12,
        'Base damage': 30
    },
    F35: {
        'Max ammo': 12,
        'Base damage': 50
    }
}

function Aircraft(typeName, ammunition) {
    this.type = typeName;
    this.ammunition = ammunition;
}
Aircraft.prototype.fight = function() {
    let damageCaused = typeOfAircraft[this.type]['Base damage'] * this.ammunition;
    this.ammunition = 0;
    return damageCaused;
}
Aircraft.prototype.refill = function(number) {
    this.ammunition = (this.ammunition + number > typeOfAircraft[this.type]['Max ammo']) ? typeOfAircraft[this.type]['Max ammo'] : this.ammunition + number;
}
Aircraft.prototype.getType = function() {
    return this.type;
}
Aircraft.prototype.getAmmunition = function() {
    return this.ammunition;
}
Aircraft.prototype.getStatus = function() {
    return 'Type ' + this.type + ', Ammo: ' + this.ammunition + ', Base Damage: ' + typeOfAircraft[this.type]['Base damage'] + ', All Damage: ' + typeOfAircraft[this.type]['Base damage'] * this.ammunition;
}
Aircraft.prototype.isPriority = function() {
    return (this.type == 'F35') ? true : false;
}

const aircraft1 = new Aircraft('F16', 10);
console.log(aircraft1.fight());
aircraft1.refill(300);
console.log(aircraft1.getStatus());
console.log(aircraft1.getType());
console.log(aircraft1.isPriority());


// Carrier
// Create a class that represents an aircraft-carrier

// The carrier should be able to store aircrafts
// Each carrier should have a store of ammo represented as number
// The initial ammo should be given by a parameter in its constructor
// The carrier also has a health point given in its constructor as well
// Methods
// add
// It should take a new aircraft and add it to its storage
// fill
// It should fill all the aircraft with ammo and subtract the needed ammo from the ammo storage
// If there is not enough ammo then it should start to fill the aircrafts with priority first
// If there is no ammo when this method is called, it should throw an exception
// fight
// It should take another carrier as a reference parameter and fire all the ammo from the aircrafts to it, then subtract all the damage from its health points
// getStatus
// It should return a string about itself and all of its aircrafts' statuses in the following format:

// HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// If the health points are 0 then it should return: It's dead Jim :(

function Carrier(ammo, healthPoints) {
    this.aircrafts = [];
    this.ammoStorage = ammo;
    this.healthPoints = healthPoints;
}
Carrier.prototype.add = function(aircraft) {
    this.aircrafts.push(aircraft);
}
Carrier.prototype.fill = function() {
    this.aircrafts.forEach(function(currentAircraft) {
        let originAmmo = currentAircraft.getAmmunition();
        currentAircraft.refill();
        this.ammoStorage -= currentAircraft.getAmmunition() - originAmmo;
    });
}
Carrier.prototype.fight = function(carrier) {
    let totalDamage = undefined;
    this.aircrafts.forEach(function(currentAircraft) {
        totalDamage += currentAircraft.fight();
    });
    this.healthPoints -= totalDamage;
}
Carrier.prototype.fight = function(carrier) {
    if (this.healthPoints == 0) {
        return "It's dead Jim :(";
    }
    let totalDamage = undefined;
    this.aircrafts.forEach(function(currentAircraft) {
        totalDamage += currentAircraft.fight();
    });
    let statusOfItself = 'HP: ' + this.healthPoints + ', Aircraft count: ' + this.aircrafts.length + ', Ammo Storage: ' + this.ammoStorage + ', Totla damage: ' + totalDamage;
    statusOfItself += '\n Aircrafts: \n';
    statusOfItself += this.aircrafts.forEach(function(currentAircraft) {
        return currentAircraft.getStatus();
    });
}












