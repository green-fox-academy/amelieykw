'use strict';

// let stack1: number[] = [1, 3];
// let stack2: number[] = [2];
// let stack3: number[] = [];

let stack1_Naive: number[] = [4, 8, 2, 7, 6];
let stack2_Naive: number[] = [1, 9, 5];
let stack3_Naive: number[] = [3];

function sortNavie() {
    // corner case
    if (stack1_Naive == null || stack1_Naive.length <= 1) {
        return;
    }

    stack1_Naive = stack1_Naive.concat(stack3_Naive);
    stack1_Naive = stack1_Naive.concat(stack2_Naive);
    stack3_Naive = [];
    stack2_Naive = [];

    console.log("After put all elements into stack 1 : ");
    console.log("A : " + stack1_Naive);
    console.log("B : " + stack2_Naive);
    console.log("C : " + stack3_Naive);

    helperNavie(stack1_Naive, stack2_Naive, stack3_Naive, stack1_Naive.length + stack2_Naive.length + stack3_Naive.length);
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
console.log("A : " + stack1_Naive);
console.log("B : " + stack2_Naive);
console.log("C : " + stack3_Naive);

console.time("sort time");
sortNavie();
console.timeEnd("sort time");

console.log("After : ");
console.log("A : " + stack1_Naive);
console.log("B : " + stack2_Naive);
console.log("C : " + stack3_Naive);
