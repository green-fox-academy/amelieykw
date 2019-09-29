'use strict';

function wordCount(object) {
    // corner case 
    if (object == null) {
        return null;
    }
    let maxCount = 0;
    let maxWord = undefined;
    for (let entry of Object.entries(object)) {
        console.log(entry);
        if (maxCount < entry[1]) {
            maxCount = entry[1];
            maxWord = entry[0];
        }
    }
    return maxWord;
}

// test 
let obj = {
    'I' : 2,
    'love' : 3,
    'China' : 5
} 
console.log(wordCount(obj));

console.log(wordCount({}));

console.log(wordCount([]));