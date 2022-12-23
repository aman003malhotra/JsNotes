function Person(){

}

const p = new Person();

Object.getPrototypeOf(p);
Object.getPrototypeOf(Person);
Object.getPrototypeOf(Object);
Object.getPrototypeOf(Function.prototype);
Object.getPrototypeOf(Object.prototype);
Object.getPrototypeOf(Function);


// JavaScript is a prototypal language
// ==> classes are not present
// ==> not traditionally object oriented
// ==> Everything is public(Now in 2021 we can make the js public and private)
// ==> objects inherits from another objects.

// What is prototype
// a prototype is a working object instance

// There are two prototypes 
// ==> prototype object on functions
// Object prototypes (aka prototypes of objects)
// Every object is born referencing to a prototype object(parent) by a secret property [[Prototype]] or __proto__.


// Prototype-based programming
// ==> prototype-based programming is a style of object-oriented programming in which behaviour reuse (aka inheritance) is performed
//     via a process of reusing existing object via delegation that serve a prototypes 
// ==> this model can also be known as prototypal, prototype-oriented, classless, or instance based programming
// ==> Delegation is the language feature that supports prototype-based programming

// PROTOTYPE CHAINS
// The prototype relationship between two objects is about inheritance
// An object specifies its prototype via the internal property[[prototype]]
// Every object has this property, but it can be null
// the chain of objects connected by [[prototype]] property is called prototype chain.
// Even when you don't specify the prototype, a default prototype is set of every object



// READING A PROPERTY


// CREATE UPDATE AND DELETE A PROPERTY
// ==> when you do change to a property of an object, it always affect the current object only.If the property does not exist, property is
// added to the object

// ==> It won't look up to the prototype chain.











