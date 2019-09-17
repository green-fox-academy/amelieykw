'use strict'

// Conditionals
const a = 13;
if (a === 13) {
    console.log('Yaaay! The value of the "a" variable is 13'); // This block will run
}
if (a === 8) {
    console.log('Yaaay! The value of the "a" variable is 8'); // This block will NOT run
}

const b = 20;
if (b < 10) {
    console.log('Yaaay! The value of the "b" variable is lower than 10'); // This block will NOT run
} else {
    console.log('Yaaay! The value of the "b" variable is higher than 10'); // This block will run
}

const c = 15;
if (c < 10) {
    console.log('Yaaay! The value of the "c" variable is lower than 10'); // This block will NOT run
} else if (c < 20) {
    console.log('Yaaay! The value of the "c" variable is higher than 10'); // This block will run
} else {
    console.log('Yaaay! The value of the "c" variable is higher than 10'); // This block will NOT run
} 

const thirsty = true;
const hungry = false;
if (thirsty && hungry) {
    console.log('Lunch time!');
} else if (thirsty || hungry) {
    console.log('Snack time!');
} else {
    console.log('No food for you.');
}
console.log();

// ex 01 - conditional variable mutation
console.log("================ ex 01 =================");
const ex01_a = 24;
let out = 0;
// if a is even increment out by one
if (ex01_a % 2 == 0) {
    out++;
}
console.log(out);

const ex01_b = 13;
let out2 = '';
// if b is between 10 and 20 set out2 to 'Sweet!'
// if less than 10 set out2 to 'More!'
// if more than 20 set out2 to 'Less!'
if (ex01_b < 10) {
    out2 = 'More!';
} else if (ex01_b > 20) {
    out2 = 'Less!';
} else {
    out2 = 'Sweet!';
}
console.log(`ex01 out2 = ${out2}`);
console.log();

let ex01_c = 123;
const credits = 100;
const isBonus = false;
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same
if (credits <= 50 && !isBonus) {
    ex01_c += 2;
} else if (!isBonus) {
    ex01_c += 1;
} 
console.log(`ex01 ex01_c = ${ex01_c}`);
console.log();

const ex01_d = 8;
const time = 120;
let out3 = '';
// if d is dividable by 4
// and time is not more than 200
// set out3 to 'check'
// if time is more than 200
// set out3 to 'Time out'
// otherwise set out3 to 'Run Forest Run!'
if (ex01_d % 4 == 0 && time <= 200) {
    out3 = 'check';
} else if (time > 200) {
    out3 = 'Time out';
} else {
    out3 = 'Run Forest Run!';
}
console.log(`ex01 out3 = ${out3}`);
console.log();

// Loops
console.log("================ Loops =================");
let loop_a = 0;
while (loop_a < 10) {
    loop_a++;
}
console.log(loop_a); // Prints the numbers from 0 tp 9
console.log();
for (var loop_j = 0; loop_j < 100; loop_j++) {
}
console.log(loop_j); // Prints the numbers from 0 to 99

// ex02 - i like trains
console.log("================ ex02 - i like trains =================");
// Create a program that writes this line 100 times: 'I like trains!'
for (let ex02_i = 0; ex02_i < 100; ex02_i++) {
    // console.log('I like trains!');
}
// ex03 - print even
console.log("================ ex03 - print even =================");
// Create a program that prints all the even numbers between 0 and 500
for (let ex03_i = 0; ex03_i <= 500; ex03_i += 2) {
    // console.log(`ex03 ex03_i = ${ex03_i}`);
}
// ex04 - multiplication table
console.log("================ ex04 - multiplication table =================");
// Create a program that prints the multiplication table with number 
// Example: The number 15 should print:
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150
for (let ex04_i = 1; ex04_i <= 10; ex04_i++) {
    console.log(`${ex04_i} * 15 = ${ex04_i * 15}`);
}
// ex05 - fizz-buzz
console.log("================ ex05 - fizz buzz =================");
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print 'Fizz' instead of the number
// and for the multiples of five print 'Buzz'.
// For numbers which are multiples of both three and five print 'FizzBuzz'.
for (let ex05_i = 1; ex05_i <= 100; ex05_i++) {
    if (ex05_i % 3 == 0 && ex05_i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (ex05_i % 3 == 0) {
        console.log('Fizz');
    } else if (ex05_i % 5 == 0) {
        console.log('Buzz');
    } 
}
// ex06 - draw-triangle
console.log("================ ex06 - draw triangle =================");
const lineCount = 4;
// write a program that draws a triangle like this:
// 
// *
// **
// ***
// ****
//
// the triangle should have as many lines as lineCount is
for (let ex06_i = 1; ex06_i <= lineCount; ex06_i++) { // how many lines?
    // for each line
    let thisLine = ''; 
    for (let stars = 1; stars <= ex06_i; stars++) { // how many stars?
        thisLine += '*';
    }
    console.log(thisLine);
}
// ex07 - draw-pyramid
console.log("================ ex07 - draw pyramid =================");
const ex07_lineCount = 4;
// write a program that draws a pyramid like this:
// 
//    *
//   ***
//  *****
// *******
//
// the pyramid should have as many lines as lineCount is
function drawSpaces (lineCount, index, thisLine) {
    for (let space = 1; space <= lineCount - index; space++) {
        thisLine += ' ';
    }
    return thisLine;
}
function drawStars (index, thisLine) {
    for (let stars = 1; stars <= index * 2 - 1; stars++) {
        thisLine += '*';
    }
    return thisLine;
}
function drawPyramid (lineCount) {
    for (let i = 1; i <= lineCount; i++) { // how many lines?
        // for each line
        let thisLine = ''; 
        // how many spaces before stars?
        thisLine = drawSpaces(lineCount, i, thisLine);
        // how many stars?
        thisLine = drawStars(i, thisLine);
        // how many spaces after stars?
        thisLine = drawSpaces(lineCount, i, thisLine);
        console.log(thisLine);
    }
} 

drawPyramid(ex07_lineCount);

// ex08 - draw-diamond
console.log("================ ex08 - draw diamond =================");
const ex08_lineCount = 7;
// write a program that draws a diamond like this:
// 
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// the diamond should have as many lines as lineCount is
function drawDiamond (lineCount) {
    // draw upper pyramid
    drawPyramid(lineCount / 2 + 1);
    // draw lower reverse pyramid
    drawReversePyramid(lineCount / 2);
}

drawDiamond(ex08_lineCount);

function drawReverseSpaces (index, thisLine) {
    for (let space = 1; space <= index; space++) {
        thisLine += ' ';
    }
    return thisLine;
}
function drawReverseStars (lineCount, index, thisLine) {
    for (let stars = lineCount * 2 - index * 2; stars >= 1; stars--) {
        thisLine += '*';
    }
    return thisLine;
}
function drawReversePyramid (lineCount) {
    for (let i = 1; i <= lineCount; i++) { // how many lines?
        // for each line
        let thisLine = ''; 
        // how many spaces before stars?
        thisLine = drawReverseSpaces(i, thisLine);
        // how many stars?
        thisLine = drawReverseStars(lineCount, i, thisLine);
        // how many spaces after stars?
        thisLine = drawReverseSpaces(i, thisLine);
        console.log(thisLine);
    }
}


// ex09 - draw-square
console.log("================ ex08 - draw square =================");
const ex09_lineCount = 6;
// write a program that draws a square like this:
// 
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// the square should have as many lines as lineCount is
function drawSquare (lineCount) {
    // how many lines?
    for (let i = 1; i <= lineCount; i++) {
        // for each line
        if (i === 1 || i === lineCount) {
            console.log(drawOneline(lineCount));
        } else {
            console.log(drawBorder(lineCount));
        }
    }
}

drawSquare(ex09_lineCount);

function drawOneline (lineCount) {
    let thisLine = '';
    for (let i = 0; i < lineCount; i++) {
        thisLine += '%';
    }
    return thisLine;
}
function drawBorder (lineCount) {
    let thisLine = '%';
    for (let i = 0; i < lineCount - 2; i++) {
        thisLine += ' ';
    }
    thisLine += '%';
    return thisLine;
}

// ex10 - draw-diagonal
console.log("================ ex10 - draw diagonal =================");
const ex10_lineCount = 6;
// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The diagonal should have as many lines as lineCount is
function drawDiagonal (lineCount) {
    // how many lines?
    for (let i = 1; i <= lineCount; i++) {
        // for each line
        if (i === 1 || i === lineCount) {
            console.log(drawOneline(lineCount));
        } else {
            console.log(drawDiagonalBorder(lineCount, i));
        }
    }
}

drawDiagonal(ex09_lineCount);

function drawDiagonalBorder (lineCount, index) {
    let thisLine = '%';
    for (let i = 0; i < lineCount - 2; i++) {
        if (i === index - 2) {
            thisLine += '%';
        } else {
            thisLine += ' ';
        }
    }
    thisLine += '%';
    return thisLine;
}

// ex11 - draw-chess-table
console.log("================ ex11 - draw-chess-table =================");
const ex11_lineCount = 8;
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
function drawChessTable (lineCount) {
    // how many lines?
    for (let i = 1; i <= lineCount; i++) {
        // for each line
        let thisLine = '';
        if (i % 2 == 0) {
            thisLine += ' ';
        } 
        thisLine += drawOneline(4);
        console.log(thisLine);
    }
}

drawChessTable(ex11_lineCount);


// Funtions
console.log("================ Funtions =================");
function greetEPAMAlert () {
    // alert('Hello EPAM!');
}

greetEPAMAlert();

function greetEPAMLog () {
    console.log('Hello EPAM!');
}

greetEPAMLog();
console.log();

// Funtion arguments
console.log("================ Funtion arguments =================");
function greetByName (name) {
    console.log('Well hi there,', name);
}
greetByName('Amélie');
greetByName('Istvan', 'mentor');

// Default values for function arguments
console.log("================ Default values for function arguments =================");
function greet(greet = 'Hi', name = 'pal') {
    console.log(greet, name);
}
  
greet('Hey');
greet('Hello', 'Peter');

// Function return values
console.log("================ Function return values =================");
function makeGreen(name) {
    const newName = `Green ${name}`;
    return newName;
}
  
let name = makeGreen('Egg');
greetByName('Whazzup', name);

// ex12 - doubling
console.log("================ ex12 - doubling =================");
// - Create a variable named `ak` and assign the value `123` to it
// - Create a function called `doubling` that doubles it's input parameter
// - Log the result of `doubling(ak)` to the console
let ak = 123;
function doubling (input) {
    console.log(input * input);
}
doubling(ak);

// ex13 - greet
console.log("================ ex13 - greet =================");
// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`
let al = 'EPAM';
function greet (input) {
    // special case
    if (input === null) {
        console.log('please give the input');
    }
    console.log('Greetings, dear ', input);
}
greet(al);

// ex14 - append-s
console.log("================ ex14 - append-s =================");
// - Create a variable named `am` and assign the value `dog` to it
// - Write a function called `appendS` that gets a string as an input
//   and appends an 's' character to its end
// - Print the result of `appendS(am)` to the console
let am = 'dog';
function appendS (input) {
    input += 's';
    return input;
}
console.log(appendS(am));


// ex15 - sum
console.log("================ ex15 - sum =================");
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum (input) {
    let result = 0;
    for (let i = 1; i <= input; i++) {
        result += i;
    } 
    return result;
}

// ex16 - factorio
console.log("================ ex16 - factorio =================");
// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio (input) {
    
}


// ex17 - printer
console.log("================ ex17 - printer =================");
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
function printer (input1, input2, input3) {
    console.log(input1, input2, input3);
}


// Data structures
// Array methods
console.log(['apple', 'pear', 'melon'].indexOf('pear')); // 1

['apple', 'pear', 'melon'].forEach((e, i) => {
  console.log(e, i);
});

const triples = [1, 2, 3, 4, 5].map((e) => {
  return e * 3;
});
console.log(triples); // [3, 6, 9, 12, 15]

const evens = [1, 2, 3, 4, 5].filter((e) => {
  return e % 2 === 0;
});
console.log(evens); // [2, 4]

const isAllEven = [2, 6, 14, 5, 4].every((e) => {
  return e % 2 === 0;
});
console.log(isAllEven); // false

const isAnyEven = [2, 6, 14, 5, 4].some((e) => {
  return e % 2 === 0;
});
console.log(isAnyEven); // true

const letters = 'apple'.split('');
console.log(letters); // ['a', 'p', 'p', 'l', 'e']
console.log(letters.join('@')); // Worms in the apple!

// ex18 - third
console.log("================ ex18 - third =================");
// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`
let magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]);

// ex19 - compare-length
console.log("================ ex19 - compare-length =================");
// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`
let p1 = [1, 2, 3];
let p2 = [4, 5];
console.log(p2.length > p1.length);

// ex20 - sum-elements
console.log("================ ex20 - sum-elements =================");
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element
let r = [54, 23, 66, 12];
console.log(r[1] + r[2]);

// ex21 - swap-elements
console.log("================ ex20 - swap-elements =================");
// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// - Swap the first and the third element of `abc`