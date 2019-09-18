'use strict';

// Strings
console.log("================= Strings : ex 01 ==================")
var example = "In a dishwasher far far away";

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
example = example.replace('dishwasher', 'galaxy');

console.log(example)
console.log();

console.log("================= Strings : ex 02 ==================")
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse (input) {
    // time: O(input.length) 
    let reversed_input = '';
    for (let i = input.length - 1; i >= 0 ; i--) {
        reversed_input += input.charAt(i);
    }
    return reversed_input;
}

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
console.log(reverse(reversed));

module.exports = reverse;
console.log();

console.log("================= Strings : ex 03 ==================")
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
var url = "https//www.reddit.com/r/nevertellmethebots";

url = url.replace('bots', 'odds');
url = url.replace('https', 'https:');

console.log(url);
console.log();


console.log("================= Strings : ex 04 ==================")
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
quote = quote.replace('It you', 'It takes longer than you');

console.log(quote);
console.log();

console.log("================= Strings : ex 05 ==================")
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
todoText = "My todo:\n" + todoText;
todoText += " - Download\n";
todoText += "\t- Diablo\n";  

console.log(todoText);
console.log();

