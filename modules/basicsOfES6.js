// ES6 modules are stored in files.
// There is exactly one module per file and one file per module
// you have two ways of exporting things from a module.

// MUTLIPLE NAMED EXPORTS


// lib.js
export const sqrt = Math.sqrt;
export function square(x){
    return x*x;
}

export function diag(x,y){
    return sqrt (square(x) + square(y));
}

// main.js
import {square as sq, diag as di} from 'lib';
console.log(sq(11));
console.log(di(4,3));


// You can also import complete module 
// lib.js
export const sqrt2 = Math.sqrt;
export function square(x){
    return x*x;
}

export function diag(x,y){
    return sqrt (square(x) + square(y));
}

// main.js
import * as all from 'lib';
console.log(all.square(11));
console.log(all.diag(4,3));


// Single default export
export default function square(x){
    return x*x;
}
// when we use default, name at the time of import does not matter.it can only be used once
export default function diag(x,y){
    return sqrt (square(x) + square(y));
}

// main.js
import square from 'lib';
import diag from 'lib';

console.log(square(11));
console.log(diag(4,3));

// import and export must be at the top level


// imports are hoisted
// ==> module imports are hoisted (internally moved to the beginning of the current scope)

// imports are read only views on exports
// the connection to variables declared inside module bodies remain live, as demonstrated in the following code.

// Most JavaScript style guides don’t recommend semicolons after function and class declarations. for exporting

// RE-EXPORT 
export {sayHi} from './say.js'; // re-export sayHi

export {default as User} from './user.js'; // re-export default

