// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//// **** FIRST POSSIBLE SOLUTION *** RUN TIME COMPLEXITY O(N)
// function fib(n) {
//     const result = [0,1];
//     for (let i = 2; i <=n; i++) {
//         const a = result[i-1];
//         const b = result[i-2];
//         result.push(a+b);
//     }
//     return result[n];
// }

//// **** SECOND POSSIBLE SOLUTION *** USING RECURSION RUN TIME COMPLEXITY O(2^N) it is exponential
// function fib(n){
//     if(n<2){
//         return n;
//     }
//     return fib(n-2)+fib(n-1)
// }

/// FOR BETTER SOLUTION USE MEMOIZATION
////  **** THIRD POSSIBLE SOLUTION ****

function memoize(fn){
    const cache = {};

    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this,args)
        cache[args] = result;

        return result;
    }
}
function slowFib(n){
    if(n<2){
        return n;
    }
    return slowFib(n-1)+slowFib(n-2);
}
const fib = memoize(slowFib)
module.exports = fib;
