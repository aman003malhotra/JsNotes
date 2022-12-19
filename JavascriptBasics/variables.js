// A variable
// ==> A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

// ==> To create a variable in JavaScript, use the let keyword.

// ==> To be concise, we can combine the variable declaration and assignment into a single line
// let message = 'Hello!'

// ==> We can also declare multiple variables in one line:
// let user = 'John', age = 25, message = 'Hello';
// ==> That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

// ==> A variable should be declared only once. A repeated declaration of the same variable is an error

// ==> There are two limitations on variable names in JavaScript:
    // 1. The name must contain only letters, digits, or the symbols $ and _.
    // 2. The first character must not be a digit.

// ==> Variables named apple and APPLE are two different variables.

// ==> Normally, we need to define a variable before using it. But in the old times,
// it was technically possible to create a variable by a mere assignment of the value without using let. 
// This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

// ==> To declare a constant (unchanging) variable, use const instead of let
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error


// ==> there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are 
// calculated in run-time, during the execution, but do not change after their initial assignment.

// const pageLoadTime = /* time taken by a webpage to load */;

// ==> The value of pageLoadTime is not known prior to the page load, 
// so it’s named normally. But it’s still a constant because it doesn’t change after assignment.
// capital-named constants are only used as aliases for “hard-coded” values



















