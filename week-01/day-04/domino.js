'use strict';
exports.__esModule = true;
var Domino = /** @class */ (function () {
    function Domino(valueA, valueB) {
        this.values = [valueA, valueB];
    }
    Object.defineProperty(Domino.prototype, "valueA", {
        get: function () {
            return this.values[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Domino.prototype, "valueB", {
        get: function () {
            return this.values[1];
        },
        enumerable: true,
        configurable: true
    });
    Domino.prototype.toString = function () {
        return "[" + this.values[0] + "|" + this.values[1] + "]";
    };
    Domino.prototype.printAllFields = function () {
        console.log("Inside printAllFields method.");
    };
    return Domino;
}());
exports.Domino = Domino;
