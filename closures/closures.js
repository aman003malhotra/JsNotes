for (var i = 0; i<3; i++){
    setTimeout(function log(){
        console.log(i);
    }, 1000);
}

// Answer will be   3
//                  3
//                  3    

// SCOPE
// scope is an enclosing context in which a variable is associated with a value and is accessible

let myName = 'in module scope';
function printName(){
    console.log(myName);
}
printName() // prints in module scope

myName = 'name changed'

printName() // prints name changed


// Lexical(Static) Scope
//  In static scoping, an identifier refers to it nearest lexical environment
// Lexical can be understood as "nesting of scopes that is visible by looking at the source code"

// Closures
// A closures refers to the ability of a function to
// ==> remember its lexical parent scope
// ==> has read/write access to variable defined in the parent environment
// A closure is a function that remembers its outer variables and can access them all functions in JavaScript are closures

// the search goes outside from block to function to module scope and inherits the value in parent scope

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ? ANSWER - 0
console.log( counter2() ); // ? ANSWER - 1

// TODO:Ask Sir source https://javascript.info/closure
// let value = "Surprise!";

// function f() {
//   let value = "the closest value";

//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }

//   return g;
// }

// let g = f();
// g();