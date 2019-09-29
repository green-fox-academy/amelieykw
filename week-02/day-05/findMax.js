'use strict';

function findMax(input) {
    // corner case
    if (input == null || !Array.isArray(input)) {
        return "input is not an array";
    }
    const len = input.length;
    if (len == 0) {
        return 0;
    } else if (len == 1) {
        return input[0];
    } else {
        let max = input[0];
        for (let e of input) {
            max = (max < e) ? e : max;
        }
        return max;

    }
}

// test 
console.log("5 : " + findMax(5));
console.log("[1, 5, 4, 8] : " + findMax([1, 5, 4, 8]));
console.log("[] : " + findMax([]));