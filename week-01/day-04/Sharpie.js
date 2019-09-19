'use strict'
console.log("=================  Encapsulation and Constructor : ex 02 ==================");
// Sharpie

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount
class Sharpie {
    constructor(color, width, inkAmount = 100.0) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    get inkAmount() {
        return this.inkAmount;
    }

    use() {
        this.inkAmount--;
    }
}

module.exports = Sharpie;
