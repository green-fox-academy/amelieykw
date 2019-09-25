'use strict';

// algorithm : bubble sort - Time complexity: O(n^2), space complexity: O(1)
function bubbleSort(input: number[]) : number[] {
    // corner case
    if (input == undefined) {
        return input;
    }
    if (input.length <= 1) {
        return input;
    }
    for (let outer = 0; outer < input.length - 1; outer++) {
        for (let inner = outer; inner < input.length - 1; inner++) {
            // swap if bigger
            if (input[inner] > input[inner + 1]) {
                let tmp = input[inner];
                input[inner] = input[inner + 1];
                input[inner + 1] = tmp;
            }
        }
    }
    console.log(input);
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

// test 
console.time("undefinedArray");
console.log(bubbleSort(undefinedArray));
console.timeEnd("undefinedArray");

console.time("emptyArray");
bubbleSort(emptyArray);
console.timeEnd("emptyArray");

console.time("oneEletArray");
bubbleSort(oneEletArray);
console.timeEnd("oneEletArray");

console.time("twoEletArrayEqual");
bubbleSort(twoEletArrayEqual);
console.timeEnd("twoEletArrayEqual");

console.time("twoEletArrayNoEqual");
bubbleSort(twoEletArrayNoEqual);
console.timeEnd("twoEletArrayNoEqual");

console.time("unsortedArray");
bubbleSort(unsortedArray);
console.timeEnd("unsortedArray");

console.time("partialUnsortedArray");
bubbleSort(partialUnsortedArray);
console.timeEnd("partialUnsortedArray");

console.time("arrayWithDuplication");
bubbleSort(arrayWithDuplication);
console.timeEnd("arrayWithDuplication");

console.time("arrayWithDuplicationSorted");
bubbleSort(arrayWithDuplicationSorted);
console.timeEnd("arrayWithDuplicationSorted");
