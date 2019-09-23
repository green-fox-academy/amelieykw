'use strict';

import { Animal } from "./Animal";
import { Flyable } from "./Flyable";

export class Bird extends Animal implements Flyable{
    constructor(name: String) {
        super();
        this._name = name;
        this._wayOfBreeding = 'laying eggs';
    }

    // inherts and must implements:
    // land() : void;
    // fly() : void;
    // takeOff() : void;
    public land() : void {
        console.log(this._name + " is landing.");
    }

    public fly() : void {
        console.log(this._name + " is flying.");
    }

    public takeOff() : void {
        console.log(this._name + " is taking off.");
    }
}