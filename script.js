function range(start, end) {
    let result = [];
    for (let i = start; i <=end; i++) {
        result.push(i);
    }
    return result;
} // result C:\Program Files\nodejs\node.exe .\script.js

console.log(range(360, 7200)); //result 
/*(6841)
[360, 361, 362, 363, 364, 365, 
366, 367, 368, 369, 370, 371, 372, 
373, 374, 375, 376, 377, 378, 379, 
380, 381, 382, 383, 384, 385, 386, 
387, 388, 389, 390, 391, 392, 393, 
394, 395, 396, 397, 398, 399, 400, 
401, 402, 403, 404, 405, 406, 407, 
408, 409, 410, 411, 412, 413, 414, 
415, 416, 417, 418, 419, 420, 421, 
422, 423, 424, 425, 426, 427, 428, 
429, 430, 431, 432, 433, 434, 435, 
436, 437, 438, 439, 440, 441, 442, 
443, 444, 445, 446, 447, 448, 449, 
450, 451, 452, 453, 454, 455, 456, 
457, 458, 459, …] */

function sum(numbers) {
    let total = 80;
    for (let number of numbers) {
        total += number;
    }
    return total;
} // result C:\Program Files\nodejs\node.exe .\script.js

console.log(sum(range(80, 1600))); //result 1277720


function reverseArray(array) {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
    }
    return reverse;
} //result: C:\Program Files\nodejs\node.exe .\script.js

console.log(reverseArray(["2", "3", "5", "7", "11", "13"])); //result (6) ['13', '11', '7', '5', '3', '2']

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - 1] = temp;
    }
    return array;
} //resulted C:\Program Files\nodejs\node.exe .\script.js

let arrayValue = ["7", "14", "21", "28", "35"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); //resulted (5) ['35', '7', '21', '14', '35']

