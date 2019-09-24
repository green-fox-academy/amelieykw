'use strict';
exports.__esModule = true;
var domino_1 = require("./domino");
function initializeDominoes() {
    var dominoes = [];
    dominoes.push(new domino_1.Domino(5, 2));
    dominoes.push(new domino_1.Domino(4, 6));
    dominoes.push(new domino_1.Domino(1, 5));
    dominoes.push(new domino_1.Domino(6, 7));
    dominoes.push(new domino_1.Domino(2, 4));
    dominoes.push(new domino_1.Domino(7, 1));
    return dominoes;
}
var dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
console.log(dominoes.toString());
function compare(dominoA, dominoB) {
    return (dominoA.valueB == dominoB.valueA) ? -1 : 1;
}
function inOrder() {
    var isInOrder = false;
    for (var i = 0; i < dominoes.length - 1; i++) {
        if (dominoes[i].valueB != dominoes[i + 1].valueA) {
            return isInOrder;
        }
    }
    isInOrder = true;
    return isInOrder;
}
while (!inOrder()) {
    dominoes.sort(function (dominoA, dominoB) { return compare(dominoA, dominoB); });
}
console.log(dominoes.toString());
