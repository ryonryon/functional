const multiple = (a, b) => a * b;

const plus = (a, b) => a + b;

const double = (n) => n * 2;

const increment = (n) => n +1;

const double_increment = (n) => increment(double(n)); 

const even = (n) => n * 2 + 1;

const reduce = (array, f) => {
    let s;
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            s = array[0];
        } else {
            s = f(s, array[i])
        }
    }

    return s;
};

const map = (array, f) => {

    let resultArray = [];
    for(let i = 0; i < array.length; i++) {
        resultArray[i] = f(array[i]);
    }

    return resultArray;
};

const compose = (l, m) => {

    const lm = (n) => m(l(n));

    return lm;
};

const range = (n) => {

    let array = [];
    for(let i = 0; i < n; i++) {
        array[i] = i;
    }

    return array;
};

let s = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('plus 1 to 9: ' + reduce(s, plus));
console.log('multiple 1 to 9: ' + reduce(s, multiple));
console.log('double 1 to 9: '+ map(s, double))
console.log('double and increment 1 to 9: '+ map(s, double_increment));

const increment_double = compose(increment, double);
const double_double_increment = compose(double, double_increment);

console.log('increment and double 1 to 9: '+ map(s, increment_double));
console.log('double and double_increment 1 to 9: '+ map(s, double_double_increment));

console.log('print 0 to 30: '+ range(31));
console.log('even 0 to 9: ' + map(range(10), even));
console.log('plus 1 to 999: '+ reduce(range(1000), plus));