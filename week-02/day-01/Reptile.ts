'use strict';

import { Animal } from "./Animal";

export class Reptile extends Animal {
    constructor(name: String) {
        super();
        this._name = name;
        this._wayOfBreeding = 'laying eggs';
    }
}