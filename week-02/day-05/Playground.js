'use strict';

const Garden = require('./Garden');

class Playground extends Garden {
    constructor(width, length, toys) {
        super(width, length);
        this.toys = toys;
    }

    add(toy) {
        this.toys.push(toy);
    }
}