'use strict';

// create the inherited class

class Foods {
    constructor(sound) {
      this.sound = sound;
    }
  
    serve() {
      console.log(this.sound);
    }
  }
  
  // Pizza inherits Foods
  
  class Pizza extends Foods {
    constructor(sound, price) {
      super(sound);
      this.price = price;
    }
  
    cost() {
      console.log(this.price);
    }
  }
  
  // let's fire it up and see how is it works
  
  const firstPizza = new Pizza('Chew', 1000);
  
  firstPizza.serve(firstPizza.sound);
  firstPizza.cost();