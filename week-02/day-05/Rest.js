'use strict';

// Rest
// You can also take unknown amount of arguments more easily.

// function foo(){
//     var rest = Array.from(arguments);
//     var x = rest.shift();
//     // at this point we have rest with the content we want
//     return x * rest.length;
// }

// function foo(x, ...rest) {
//   return x * rest.length;
// }

// foo(4,3,2,1)

// Write a function that takes at least 3 parameters, all of them numbers. 
// The function should return a matrix and the first two parameters should specify it's size. 
// The first parameter is the number of rows, the second is the number of columns. 
// The rest of the numbers is the content of the matrix line-by-line. 
// If the matrix can't be created because of insufficient parameters the function should return null.

function matrix(rows, cols, ...contentOfEachRow) {
    // corner case
    if (arguments.length < 3) {
        return null;
    } 
    let result = [];
    for (let i = 0; i < rows; i++) {
        let currentRow = [];
        for (let c = 0; c < cols; c++) {
            currentRow.push(contentOfEachRow);
        }
        result.push(currentRow);
    }
    return result;
}

console.log(matrix(2, 2, '#', '*'));