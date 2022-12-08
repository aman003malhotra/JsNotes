// MEMOIZATION
// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function 
// calls and returning the cached result when the same input occurs again.

const memoize = require('lodash.memoize');

// memoize function created by using cache memory
function memoizeSelf(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }

        cache.set(key, fn( ...args));
        return cache.get(key);
    }
}

function fib(n) {
    if(n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2); 
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

// if we want to use the lodash/memoize
const fibM = memoize(fib);

const fibMS = memoizeSelf(fib);


time(() => {
    fibMS(38)
})
time(() => {
    fibMS(38)
})
time(() => {
    fibMS(38)
})
time(() => {
    fibMS(38)
})
time(() => {
    fibMS(38)
})
time(() => {
    fibMS(38)
})