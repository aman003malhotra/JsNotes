// ==> We can put any type in a variable. For example, a variable can at one moment be a string and then store a number

// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, 
// meaning that there exist data types, but variables are not bound to any of them.

let message = "hello";
message = 123456;

// 1. NUMBER 
// ==> The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;

// ==> Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// We can get it as a result of division by zero
alert( Infinity );

// ==> NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance
// NaN is sticky. Any further mathematical operation on NaN returns NaN

alert( NaN + 1 ); // NaN

NaN ** 0 // 1
// =======================================================================

// 2. BigInt 


// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives
// BigInt type was recently added to the language to represent integers of arbitrary length.

// =======================================================================

// 3. STRING 
// ==> A string in JavaScript must be surrounded by quotes.
// ==> Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
// ==> Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}

console.log(`the result is ${1 + 2}`);


// ==> In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.
// ==> In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.


// =======================================================================

// 4. BOOLEAN(logical Type)
// ==> The boolean type has only two values: true and false

let nameFieldChecked = true;

// ==> Boolean values also come as a result of comparisons

let isGreater = 4 > 1;

// =======================================================================

// 5. The "null" value
// ==> The special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the null value:

let age = null;

// ==> In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// =======================================================================

// 6. The “undefined” value
// ==> The special value undefined also stands apart. It makes a type of its own, just like null.
// ==> The meaning of undefined is “value is not assigned”.
// ==> If a variable is declared, but not assigned, then its value is undefined

// ** Note Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

// =======================================================================

// 7. Objects and Symbols
// ==> The object type is special.

// ==> All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).
// In contrast, objects are used to store collections of data and more complex entities.

// ==> The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

// =======================================================================

// 8. The typeof operator

// ==> The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object" // That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here

typeof alert // "function"  (3)

// NOTE * typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.














































































