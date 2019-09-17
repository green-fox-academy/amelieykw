'use strict';
// ex 01 - hello-me
console.log('Hello world');
console.log();

// ex 02 - humpty-dumpty
// Modify this program to console.log Humpty Dumpty riddle correctly
console.log('All the king\'s horses and all the king\'s men');
console.log('Humpty Dumpty had a great fall.');
console.log('Humpty Dumpty sat on a wall,');
console.log('Couldn\'t put Humpty together again.');
console.log();

// ex 03 - hello others
// Greet 3 of your classmates with this program, in three separate lines
// like:
//
// Hello, Esther!
// Hello, Mary!
// Hello, Joe!
console.log('Hello Honda');
console.log('Hello Earvin');
console.log('Hello Arthor');
console.log();

// Comments
// single line comment

/*
 multi line
 comment block
*/

// Types
// Print values with different types
// Prints a string to the terminal window
console.log('Hello, world');
// Prints an integer to the terminal window
console.log(42);
// Prints a floating point number to the terminal window
console.log(3.141592);
console.log();

// Integers
// positive, negative and zero
console.log(42); // Prints 42
console.log(-1); // Prints -1
console.log(0); // Prints 0
console.log(12341234123412341234); // 12341234123412341234
// In JavaScript numbers are rounded over a limit
// The maximal number that is not rounded (the maximum safe integer) is: 9007199254740991
// The reasoning behind that number is that JavaScript uses double-precision floating-point format numbers
// Link: http://en.wikipedia.org/wiki/Double_precision_floating-point_format
console.log();

// Floats
// Positive, negative and zero
console.log(3.1415); // Prints 3.1415
console.log(-1.5); // Prints -1.5
console.log(0.0); // Prints 0
// Leading and closing zero is not mandatory
console.log(0.5); // Prints 0.5
console.log(5.0); // Prints 5.0
console.log();

// Number Operations
// Arithmetic operations
console.log(1 + 1); // Prints 2
console.log(5 - 2); // Prints 3
console.log(3 * 4); // Prints 12
console.log(6 / 2); // Prints 3
console.log(5 / 2); // Prints 2.5
console.log(5 % 2); // Prints 1
console.log();

// Booleans
// true, false
console.log(true); // Prints true
console.log(false); // Prints false
// Boolean Operations
console.log(!true); // Prints false
console.log(!false); // Prints true
// And
console.log(true && true); // Prints true
console.log(true && false); // Prints false
console.log(false && true); // Prints false
console.log(false && false); // Prints false
// Or
console.log(true || true); // Prints true
console.log(true || false); // Prints true
console.log(false || true); // Prints true
console.log(false || false); // Prints false
console.log();

// Strings
// String and special characters
console.log('apple'); // Prints apple
console.log('don\'t'); // Prints don't
console.log('"Everything you can imagine is real." - Picasso'); // Prints "Everything you can imagine is real." - Picasso
// String Operations
// Concatenation
console.log('tooth' + 'brush'); // Prints toothbrush
// Concat string with number
console.log('My favorite number is: ' + 8); // Prints My favorite number is: 8
console.log(`My favorite number is: ${8}`); // ES6, string template literal
console.log();

// ex 04 - Introduce yourself
// Write a program that prints a few details to the console about you
// It should print each detail to a new line.
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87
console.log('My name is:' + 'Amélie Kaiwen YU'); 
console.log('My age is:' + 27); 
console.log('My height in meters is:' + 1.63);
console.log();

// ex 05 - two-numbers
// Create a program that prints a few operations on two numbers: 22 and 13
// Print the result of 13 added to 22
console.log(13 + 22);
// Print the result of 13 substracted from 22
console.log(13 - 22);
// Print the result of 22 mutiplied by 13
console.log(13 * 22);
// Print the result of 22 divided by 13 (as a decimal fraction)
console.log(22 / 13);
// Print the reminder of 22 divided by 13
console.log(22 % 13);
console.log();

// ex 06 - coding-hours
// An attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
console.log(6 * 5 * 17);
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
console.log(6 * 5 / 52 * 100 + '%');
console.log();

// Variables
// Creating different variables for each type
// var a = 5; // define a variable in <= es5
// let b = 6; // define a variable in > es5
// const c = 7; // define a constant value in > es5
// String 
const welcome = 'Hello world';
console.log(welcome);
// Boolean 
const isAwesome = true;
console.log(isAwesome);
// Integer
const theMeaningOfLifeAndTheUniverseAndEverything = 42;
console.log(theMeaningOfLifeAndTheUniverseAndEverything);
// Floating point number
const pi = 3.141592;
console.log(pi);
// isAwesome = false;
console.log();

// Assigning and creating a variable, (define its value)
let number = 2;
// Mutate a variable, (redefine its value)
number = 23;

// Arithmetic Assignment Operations
let a = 12;
a += 4;
console.log(a); // Prints 16
console.log();

let b = 12;
b -= 4;
console.log(b); // Prints 8
console.log();

let c = 12;
c *= 3;
console.log(c); // Prints 36
console.log();

let d = 12;
d /= 3;
console.log(d); // Prints 4
console.log();

let e = 12;
e %= 7;
console.log(e); // Prints 5
console.log();

let f = 12;
f++;
console.log(f); // Prints 13
console.log();

let g = 12;
g--;
console.log(g); // Prints 11
console.log();

let h = 10;
console.log(h); // Prints 10
console.log(h++); // Prints 10
console.log(h); // Prints 11
console.log();

let i = 10;
console.log(i); // Prints 10
console.log(++i); // Prints 11
console.log(i); // Prints 11
console.log();

// ex 07 - favorite-number
const favoriteNumber = 8
// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'
const myLuckyNumber = 3;
console.log(`My favorite number is: ${myLuckyNumber}`);
console.log();


// ex 08 - swap
let ex08_a = 123;
let ex08_b = 526;
// Swap the values of these variables
console.log(ex08_a);
console.log(ex08_b);
console.log('After swap:');
let tmp = ex08_a;
ex08_a = ex08_b;
ex08_b = tmp;
console.log(ex08_a + ' = a');
console.log(ex08_b + ' = b');
console.log();


// ex 09 - bmi
const massInKg = 81.2;
const heightInM = 1.78;
// Print the body mass index (BMI) based on these values
const BMI = massInKg / (heightInM * heightInM);
console.log(BMI);
console.log();


// ex 10 - define-basic-info
// Define several things as a variable, then print their values
// Your name as a string
// Your age as an integer
// Your height in meters as a float
// Whether you are married or not as a boolean
let name = 'Amélie YU';
let age = 27;
let height = 1.63;
let isMarried = false;
console.log(name);
console.log(age);
console.log(height);
console.log(isMarried);
console.log();


// ex 11 - variable-mutation
let a = 3;
// make it bigger by 10

console.log(a);

let b = 100;
// make it smaller by 7

console.log(b);

let c = 44;
// double c's value

console.log(c);

let d = 125;
// divide d's value by 5

console.log(d);

let e = 8;
// what's the cube of e's value?

console.log(e);

const f1 = 123;
const f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)

const g1 = 350;
const g2 = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)


const h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)

const i1 = 10;
const i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

const j = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)

let k = 'Apple';
// fill the k variable with its content 4 times

console.log(k);

// ex 12 - cuboid
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000


// ex 13 - secondes in a day
const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables



// Nothings
// undefined;
// null;
// NaN;

null !== undefined;
NaN !== undefined;
null !== NaN;
NaN !== NaN

null == undefined;

typeof undefined; // 'undefined'
typeof null; // 'object'
typeof NaN; // 'number'

let alma;
alma; // undefined
alma + 1; // NaN
alma = null; // null


















