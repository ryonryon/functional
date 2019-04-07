
const multiple = function(a, b) {
    return a * b;
}

const plus = function(a, b) {
    return a + b;
}

let s = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('plus 1 to 9: ' + s.reduce(plus));
console.log('multiple 1 to 9: '+ s.reduce(multiple));

