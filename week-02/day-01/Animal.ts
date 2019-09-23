'use strict';

export abstract class Animal {
    protected _name : String;
    protected _age : number;
    protected _gender : String;
    protected _wayOfBreeding : String;

    public getName() : String {
        return this._name;
    }

    public breed() : String {
        return "A " + this._name + " is breeding by " + this._wayOfBreeding;
    }
}