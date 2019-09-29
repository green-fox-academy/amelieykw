'use strict';

function average(array) {
    // corner case 
    if (array == null || !Array.isArray(array)) {
        return NaN;
    }
    const len = array.length;
    if (len == 0) {
        return 0;
    } else if (len == 1) {
        return array[0];
    } else {
        let sum = 0;
        for (let i = 0; i < len; i++) {
            sum += array[i];
        }
    }
    return sum / len;

}