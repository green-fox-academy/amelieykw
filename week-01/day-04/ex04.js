'use strict'
// Encapsulation and Constructor
class Human {

    constructor(name = 'unknown', age = 0, iq = 0) {
      this.name = name;
      this.age = age;
      this.iq = iq;
    }
  
    isSmart() {
      return this.iq > 100;
    }
  
    isNameless() {
      return this.name === 'unkown' || this.name === '';
    }
  
    beSmarter() {
      this.iq += 20;
    }
  }
  
  const human = new Human();
  const human2 = new Human('Laci', 18, 110);
  
  human.name = 'Hector';
  human.age = 1;
  
  if (human.isSmart()) {
    console.log(`${human.name} is smart, with iq: ${human.iq}`);
  }
  
  
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