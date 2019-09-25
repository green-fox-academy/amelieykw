'use strict';

function MergeSort(input: number[]) : number[] {
    // corner case
    if (input == undefined) {
        return input;
    }
    if (input.length <= 1) {
        return input;
    }

    
    
    return input;
}

// test cases
let undefinedArray = undefined;
let emptyArray = [];
let oneEletArray = [1];
let twoEletArrayEqual = [2, 2];
let twoEletArrayNoEqual = [2, 1];
let unsortedArray = [1, 2, 1, 2, 3, 8];
let partialUnsortedArray = [1, 3, 2, 8];
let arrayWithDuplication = [2, 1, 3, 2, 8];
let arrayWithDuplicationSorted = [2, 1, 3, 2, 2, 2, 8];