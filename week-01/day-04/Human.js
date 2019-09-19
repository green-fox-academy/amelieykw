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
  
  
 