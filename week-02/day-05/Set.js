'use strict';

class NoES6Set {
    constructor() {
        this.data = [];
    }

    add(input) {    
        if (this.data.indexOf(input) == -1) {
            this.data.push(input);
        }
    }

    readAll() {
        return this.data;
    }
}