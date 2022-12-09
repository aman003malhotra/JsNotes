// Strict 
// Js strict mode, introduced in ECMA script 5, is a way to opt in to a restricted variation of Js, thereby implicitly opting out of sloppy mode.

// Strict mode isn't just a subset: it intentionally has different semantics from normal code.
// to invoke strict mode for an entire script, put the exact statement "use strict"
// strict mode applies to entire script or to individual functions

// "use strict"
function returnThis(){
    return this
}

console.log(returnThis())


// Strict mode makes several changes to the normal js
// => eliminates the js silent error by changing them to throw errors
// => fixes mistakes that make it difficult for js engine to perform optimization
// => prohibits some syntax likely to be defined in future versions of ECMA Script

let foo = 17;
console.log(foo);

// TODO:SHOULD WE USE JAVASCRIPT use strict everywhere


// FIXME:didn't understand
console.log(returnThis() === global); // false for strict mode, else true
console.log(typeof returnThis.call(2) === 'object') // false for strict mode, else true
fun.apply(null) == null;
fun.call(undefined) === undefined;
typeof fun.bind(true)() === 'boolean';

// in sloppy mode any primitive or null or undefined value is always an object(boxed)










