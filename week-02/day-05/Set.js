'use strict';

class NoES6Set {
    constructor() {
        this.data = [];
    }

    add(input) {    
        if (this.data.includes(input)) {
            this.data.push(input);
        }
    }

    readAll() {
        return this.data;
    }
}