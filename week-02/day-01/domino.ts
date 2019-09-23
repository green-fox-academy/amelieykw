'use strict';

import { Printable } from "../../week-02/day-01/Printable";

export class Domino implements Printable {
    private values : number[];

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

    printAllFields() {
      console.log("Inside printAllFields method.");
    }
  }
  
