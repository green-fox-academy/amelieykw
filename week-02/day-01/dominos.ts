'use strict';

import { Domino } from "./domino";

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

console.log(dominoes.toString());

function compare(dominoA, dominoB) {
    return (dominoA.valueB == dominoB.valueA) ? -1 : 1;
}

function inOrder() {
    let isInOrder = false;
    for (let i = 0; i < dominoes.length - 1; i++) {
        if (dominoes[i].valueB != dominoes[i + 1].valueA) {
            return isInOrder;
        }
    }
    isInOrder = true;
    return isInOrder;
}

while(!inOrder()) {
    dominoes.sort((dominoA, dominoB) => compare(dominoA, dominoB));
}


console.log(dominoes.toString());