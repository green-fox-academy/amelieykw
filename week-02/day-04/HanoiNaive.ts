'use strict';

import { putIntoOneStack } from "./Hanoi";

let stack1: number[] = [1, 3];
let stack2: number[] = [2];
let stack3: number[] = [];

// let stack1: number[] = [4, 8, 2, 7, 6];
// let stack2: number[] = [1, 9, 5];
// let stack3: number[] = [3];

function sortNavie() {
    // corner case
    if (stack1 == null || stack1.length <= 1) {
        return;
    }

    stack1 = stack1.concat(stack3);
    stack1 = stack1.concat(stack2);
    stack3 = [];
    stack2 = [];

    helperNavie(stack1, stack2, stack3, stack1.length + stack2.length + stack3.length);
}

function helperNavie(stack1: any[], stack2: any[], stack3: any[], totalNb: any) {
    let globalMax: number = -1;

    while (stack1.length > 0) {
        while (stack1.length > 0) {
            let s1top = stack1.pop();
            globalMax = (globalMax < s1top) ? s1top : globalMax;
            stack2.push(s1top);
        }
        while (stack2.length > 0) {
            let s2top = stack2.pop();
            if (globalMax == s2top) {
                stack3.push(s2top);
            } else {
                stack1.push(s2top);
            }
        }
        globalMax = -1;
    }
}


// test
console.log("Before : ");
console.log("A : " + stack1);
console.log("B : " + stack2);
console.log("C : " + stack3);

console.time("sort time");
sortNavie();
console.timeEnd("sort time");

console.log("After : ");
console.log("A : " + stack1);
console.log("B : " + stack2);
console.log("C : " + stack3);
