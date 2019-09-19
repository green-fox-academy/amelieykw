class Domino {
    constructor(valueA, valueB) {
      this.values = [valueA, valueB];
    }

    get valueA() {
      return this.values[0];
    }

    get valueB() {
      return this.values[1];
    }
  
    toString() {
      return `[${this.values[0]}|${this.values[1]}]`;
    }
  }
  
  module.exports = Domino;