// An operand – is what operators are applied to.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

// An operator is binary if it has two operands. The same minus exists in binary form as well

// The following math operations are supported:

// ==> Addition +,
// ==> Subtraction -,
// ==> Multiplication *,
// ==> Division /,
// ==> Remainder %,
// ==> Exponentiation **.

// if the binary + is applied to strings, it merges (concatenates) them

let s = "my" + "string";
console.log(s); // mystring


// if any of the operands is a string, then the other one is converted to a string too.


console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"


// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. 
// But if the operand is not a number, the unary plus converts it into a number.

// Operator precedence
// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

// There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.


let counter = 1;
alert( 2 * ++counter ); // 4

let counter_ = 1;
alert( 2 * counter_++ ); // 2, because counter_++ returns the "old" value

// The comma operator , is one of the rarest and most unusual operators

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,.
// Each of them is evaluated but only the result of the last one is returned.

// null + 1 = 1 // (5)
// undefined + 1 = NaN 

// OPERATOR PRECEDENCE
// LINK TO CHECK - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

