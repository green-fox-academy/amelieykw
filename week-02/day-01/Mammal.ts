'use strict';

import { Animal } from "./Animal";

export class Mammal extends Animal {
    constructor(name: String) {
        super();
        this._name = name;
        this._wayOfBreeding = 'pushing ministure versions out';
    }
}