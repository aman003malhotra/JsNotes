// APPLY method

// the apply method calls a function with a given this value, and arguments provided as an array(or an array like object).

var numbers = [5,6,7,8,9]
var max = Math.max.apply(null, numbers);

console.log(max);

var min = Math.min.apply(null, numbers); // you can not use Math.max([array])

console.log(min);

// while syntax of the call() and apply are same but call accepts the arguments and apply accept the single array of arguments
// with call you have to know the arguments at the compile time.With apply, you can defer the decision at runtime