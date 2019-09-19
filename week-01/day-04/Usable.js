'use strict'
// Use classes - example
export class Usable {

  constructor() {
    this.status = 'I\'m not used at all';
  }

  use() {
   this.status = 'Now, I was used at least once.';
  }
}

const firstUsable = new Usable();
firstUsable.use();

console.log("=================  Encapsulation and Constructor : ex 03 ==================");
