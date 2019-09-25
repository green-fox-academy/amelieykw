'use strict';

function MergeSort(input: number[]) : number[] {
    // corner case
    if (input == undefined) {
        return input;
    }
    if (input.length <= 1) {
        return input;
    }

    // let mid = Math.floor(input.length / 2); 
    // let left = input.slice(0, mid);
    // let right = input.slice(mid);
    // return combine(MergeSort(left), MergeSort(right));
    return merge(input, 0, input.length - 1);
}

function merge(input: number[], start: number, end: number) : number[] {
    if (input.length <= 1) {
        return input;
    }

    let mid = Math.floor(input.length / 2); 
    let left = input.slice(0, mid);
    let right = input.slice(mid);

    let mergeLeft = merge(left, start, mid); 
    let mergeRight = merge(right, mid + 1, end); 
    return combine(mergeLeft, mergeRight);
}

function combine(left: number[], right: number[]) : number[] {
    // result to return
    let result: number[] = [];
    let l = 0, r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    if (l < left.length) {
        result.push(left[l++]);
    } 
    if (r < right.length) {
        result.push(right[r++]);
    }
    return result;
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

// test
console.log(MergeSort(undefinedArray));
console.log(MergeSort(emptyArray));
console.log(MergeSort(oneEletArray));
console.log(MergeSort(twoEletArrayEqual));
console.log(MergeSort(twoEletArrayNoEqual));
console.log(MergeSort(unsortedArray));
console.log(MergeSort(partialUnsortedArray));
console.log(MergeSort(arrayWithDuplication));
console.log(MergeSort(arrayWithDuplicationSorted));