// Logical Operators

// || (OR)
// The “OR” operator is represented with two vertical line symbols:


// The OR || operator does the following:

// ==> Evaluates operands from left to right.
// ==> For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// ==> If all operands have been evaluated (i.e. all were false), returns the last operand.


alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// 1. Getting the first truthy value from a list of variables or expressions

// For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

// Let’s use OR || to choose the one that has the data and show it 
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// 2. short-circuit evaluation

// another feature of OR || operator is the so-called “short-circuit” evaluation.

// It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

// && (AND)
// The AND operator is represented with two ampersands &&

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.


// ! (NOT)

// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.











