'use strict';

function Car(km) {
    this.km = km;
  }
  
  Car.prototype.ride = function(km) {
    this.km += km;
  };
  
  const volvo = new Car(80000);
  volvo.ride(120);
  console.log(volvo.km); // 80120
  
  // Let's mess with the km via introducing a new function on the Car prototype
  // it will be available for the objects created from it
  Car.prototype.hackKilometerClock = function() {
    this.km = 3;
  };
  
  volvo.hackKilometerClock();
  
  //yay we can crank up the price :)
  console.log(volvo.km); // 3