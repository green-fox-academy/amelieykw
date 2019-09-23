'use strict';

import { Flyable } from "./Flyable";
import { Vehicle } from "./Vehicle";

class Helicopter extends Vehicle implements Flyable {
    // private _owner : String;
    // private _color : String;
    // private _brand : String;
    constructor(owner: String, color: String, brand: String) {
        super();
        this._owner = owner;
        this._color = color;
        this._brand = brand;
    }
    // inherts and must implements:
    // land() : void;
    // fly() : void;
    // takeOff() : void;
    public land() : void {
        console.log(this._owner + " is landing.");
    }

    public fly() : void {
        console.log(this._owner + " is flying.");
    }

    public takeOff() : void {
        console.log(this._owner + " is taking off.");
    }

}
