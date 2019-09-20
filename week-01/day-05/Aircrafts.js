'use strict';

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
Aircraft.prototype.flight = function() {
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
Aircraft.prototype.getStatus = function() {
    return 'Type ' + this.type + ', Ammo: ' + this.ammunition + ', Base Damage: ' + typeOfAircraft[this.type]['Base damage'] + ', All Damage: ' + typeOfAircraft[this.type]['Base damage'] * this.ammunition;
}
Aircraft.prototype.isPriority = function() {
    return (this.type == 'F35') ? true : false;
}

const aircraft1 = new Aircraft('F16', 10);
console.log(aircraft1.flight());
aircraft1.refill(300);
console.log(aircraft1.getStatus());
console.log(aircraft1.getType());
console.log(aircraft1.isPriority());