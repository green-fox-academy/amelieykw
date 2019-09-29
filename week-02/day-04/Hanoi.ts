'use strict';

let stack1: number[] = [4, 8, 2, 7, 6];
let stack2: number[] = [1, 9, 5];
let stack3: number[] = [3];

function sort() {
    // corner case
    if (stack1 == null || stack1.length <= 1) {
        return;
    }

    stack1 = stack1.concat(stack3);
    stack1 = stack1.concat(stack2);
    stack3 = [];
    stack2 = [];

    helper(stack1, stack2, stack3, stack1.length);
}

function helper(stack1: any[], stack2: any[], stack3: any[], length: number) {
    if (length <= 1) {
        return;
    }
    // step 01 : put half of stack1 into stack2
    let mid1 = length / 2;
    let mid2 = length - length / 2;
    for (let i = 0; i < mid1; i++) {
        let stack1Elet = stack1.pop();
        stack2.push(stack1Elet);
    }
    // step 02 : sort stack2 by using the buffer stack1
    helper(stack2, stack3, stack1, mid1);
    // step 03 : sort stack1 by using the buffer stack2
    helper(stack1, stack3, stack2, mid2);

    // step 04 : merge sorted stack1 and sorted stack2 into stack3
    let i = 0;
    let j = 0;
    while (i < mid1 && j < mid2) {
        if (stack2[stack2.length - 1] < stack1[stack1.length - 1]) {
            let s2Elet = stack2.pop();
            // if (s2Elet != undefined) {
            stack3.push(s2Elet);
            i++;
            // }
        } else {
            let s1Elet = stack1.pop();
            // if (s1Elet != undefined) {
            stack3.push(s1Elet);
            j++;
            // }
        }
    }
    while (i < mid1) {
        let s2Elet = stack2.pop();
        // if (s2Elet != undefined) {
        stack3.push(s2Elet);
        i++;
        // }
    }
    while (j < mid2) {
        let s1Elet = stack1.pop();
        // if (s1Elet != undefined) {
        stack3.push(s1Elet);
        j++;
        // }
    }
    // step 05 : after merging, the numbers in s3 are in descending order from top to bottom,
    // we need to push them back into s1 so that they are in ascending order
    for (let index = 0; index < length; index++) {
        // s1.offerFirst(s3.pollFirst());
        let s3Elet = stack3.pop();
        // if (s3Elet != undefined) {
        stack1.push(s3Elet);
        // }
    }
}


// test
console.log("Before : ");
console.log("A : " + stack1);
console.log("B : " + stack2);
console.log("C : " + stack3);

console.time("sort time");
sort();
console.timeEnd("sort time");

console.log("After : ");
console.log("A : " + stack1);
console.log("B : " + stack2);
console.log("C : " + stack3);