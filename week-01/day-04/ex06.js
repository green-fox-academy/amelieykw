'use strict'
console.log("=================  Encapsulation and Constructor : ex 03 ==================");
// Counter

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    static initialValue = 0;

    constructor(counter = 0) {
        this.counter = counter;
        Counter.initialValue = this.counter;
    }

    add(number) {
        this.counter += number;
    }

    get counter() {
        return this.counter;
    }

    reset() {
        this.counter = Counter.initialValue;
    }
}