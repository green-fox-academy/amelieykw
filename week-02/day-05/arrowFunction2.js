"use strict";

// In the next exercise write two anonym functions again. 
// This time the returned value is conditional.
// If the first parameter is an empty string, it should return the second parameter. 
// If not, it should return the two parameters joined by a single space.

function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction(){
    // Write your code here
    
}

frameFunction();