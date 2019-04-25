const __ = require('immutable');
const _ = require('lodash');

const __natural = __.Range();

// const fb_sc = (n) => n <= 1 ? 1 : fb_sc(n - 2) + fb_sc(n - 1);

const fb_sc_memo = _.memoize(function(n) {
    return n <= 1 ? 1 : fb_sc_memo(n - 2) + fb_sc_memo(n + 1);
});

let __fib = __natural.map(fb_sc_memo);
let __fib100 = __fib.take(100);

console.log(__fib100.toArray());