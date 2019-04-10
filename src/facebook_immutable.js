const __ = require('immutable');
const _ = require('lodash');

const __natural = __.Range();

const __natural10 = __natural.take(10);

console.log(__natural10.toArray());

const fb_sc = (n) => n <= 1 ? 1 : fb_sc(n - 2) + fb_sc(n - 1);

const fb_sc_memo = (n) => {
    _.memoize(function(n) {
        return n <= 1 ? 1 : fb_sc_memo(n - 2) + fb_sc_memo(n + 1);
    });
};

