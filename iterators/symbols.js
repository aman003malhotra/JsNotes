// Symbols 
// symbols are a new primitive introduced in ES6, just like the number, String, and boolean primitives
// symbols have a symbol function which can be used to create them
//  the only way to make a symbol is through symbol function.

let sym = Symbol('red');
let sym2 = Symbol('blue');
console.log(sym);
console.log(sym2);

let sym3 = Symbol();
let obj = {
    name:'arfat',
};

obj[sym] = 42;

console.log(Object.keys(obj));
// no two symbol are same. and are unique
// two numbers or two strings can actually be same.

// symbols are not constructors.

// symbols are often used to add unique property keys to an object that won't collide with the keys any other code might add to 
// the object and which are hidden from any mechanism other code will typically use to access the object.

// that enables a form of weak encapsulation or weak form of information hiding.

Symbol('foo') === Symbol('foo') //false


// Global Symbol Registry
// symbols have individual identities and thus don't travel across realms as smoothly as other primitive values.
// that is a problem for symbols such as symbol.iterators that should be iterable in all realms.
// if a library wants to provide cross realm symbols, it has to rely on extra support which comes in the form of the global symbol registry.

let globalSym = Symbol.for('k1')

console.log(Symbol.keyFor(globalSym));

// Characteristics of Symbols

// Symbols will never conflict with objet string keys. This makes them great for extending objects you have been given (eg. as a function param) without 
// affecting the object in a noticeable way

// symbol cannot be read using existing reflection tools.

// Symbols are not private.
// Symbols are not coercible into primitives

// there is not way to convert a symbol value to anything else.
// Symbols are not always unique. 

// WELL KNOWN SYMBOLS
// The global object symbol has several properties that serve as constants for so-called well known symbols. These symbols let you configure how ES6 treats an object,
// by using them as property keys.

let id = Symbol("description");
console.log(id); // TypeError: Cannot convert a Symbol value to a string if alert is used
console.log(id.description); // description


// As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase.
// However, symbols cannot be accessed accidentally.
// The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.


// If we want to use a symbol in an object literal {...}, we need square brackets around it.

let id2 = Symbol("id");

let user = {
  name: "John",
  [id2]: 123 // not "id": 123
};


// Symbolic properties do not participate in for..in loop.

// Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle. 
// If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.

// In contrast, Object.assign copies both string and symbol properties.















