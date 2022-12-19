// String Conversion
// String conversion happens when we need the string form of a value.

// For example, alert(value) does it to show the value.

let value = true;
value = String(value); // now value is a string "true"

// =========================================================

// Numeric Conversion
// Numeric conversion happens in mathematical functions and expressions automatically.

// For example, when division / is applied to non-numbers:
alert( "6" / "2" ); // 3, strings are converted to numbers

Number(undefined) // NaN
Number(null) // 0

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// =========================================================

// Boolean Conversion

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false