// Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. 

// BigInt numbers represent integers of arbitrary length.
//  They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1)

// let billion = 1_000_000_000;
// Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. 
// The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.
1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( 123456..toString(36) ); // 2n9c // here two dots implies that to string fnction is directly applied to number without any variable

Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
Math.trunc
// moves anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1

let num2 = 12.34;
console.log( num2.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits

// alert( isNaN(NaN) ); // true
// alert( isNaN("str") ); // true

alert( NaN === NaN ); // false

