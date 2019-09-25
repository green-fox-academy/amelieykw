'use strict';

function MergeSort(input: number[]) : number[] {
    // corner case
    if (input == undefined) {
        return input;
    }
    if (input.length <= 1) {
        return input;
    }
    return merge(input, 0, input.length - 1);
}

function merge(input: number[], start: number, end: number) : number[] {
    // corner case 
    if (start == end) {
        return input;
    }
    // 0. find the mid
    let mid: number = (input.length - 1) / 2 + 1;
    // 1. merge left half 
    let left = merge(input, 0, mid);
    // 2. merge right half
    let right = merge(input, mid + 1, end);
    // 3. combine these two halves 
    return combine(left, right);
}

function combine(left: number[], right: number[]) : number[] {
    // result to return
    let result: number[] = [];
    let i = 0, l = 0, r = 0;
    while (l < left.length && r <  right.length) {
        result[i] = (left[l] < right[r]) ? left[l++] : right[r++];
    }
    if (l < left.length) {
        result[i++] = left[l++];
    } 
    if (r < right.length) {
        result[i++] = right[r++];
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