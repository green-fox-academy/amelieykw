'use strict';

// Classes
// In ES6 classes became available. 
// Before that you had to use prototype to create OO patterned code. 
// For example if you need a class named Apple with type, color and in info function, you could write this code in ES5:

// function Apple (type) {
//     this.type = type;
//     this.color = "red";
// }
 
// Apple.prototype.getInfo = function() {
//     return this.color + ' ' + this.type + ' apple';
// };
// The same in ES6 would look like this:

// class Apple{
//     constructor(type){
//         this.type = type;
//         this.color = "red";
//     }
//     getInfo(){
//         return this.color + ' ' + this.type + ' apple';
//     }
// }
// Write with both technologies a class that's named Garden, has width and length as fields and the following functions: area(), circumference() and efficiency(). 
// The function called efficiency should return the result of area() / circumference().

class Garden {
    constructor(width, fields) {
        this.width = width;
        this.length = length;
    }    

    area() {
        return this.width * this.length;
    }
    circumference() {
        return (this.width + this.) * 2;
    }

    efficiency() {
        return this.area() / this.circumference();
    }
}

module.export = {Garden}