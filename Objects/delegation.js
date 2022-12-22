// Delegation of properties

// Reading a property in JS is not a simple operation
// In JS objects are not just containers of key-value pairs

// The [[prototype]] property keeps this reference to the parent object

// It is an internal property which means that we can't access it directly

// the chain is consulted only at the time of reading, it does not affect addition updation or deletion

obj = {
    firstName:'aman'
}
console.log('firstName' in obj )
console.log('isPrototypeOf' in obj )

// hasOwnProperty - restricts the search to only the current object