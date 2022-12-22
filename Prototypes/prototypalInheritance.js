// objects have a special hidden property [[Prototype]](as named in the specification), that is either null or references another object.
//  That object is called “a prototype”


// The property [[Prototype]] is internal and hidden, but there are many ways to set it.

// One of them is to use the special name __proto__, like this

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); 

// There are only two limitations:

// 1. The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// 2. The value of __proto__ can be either an object or null. Other types are ignored.

// __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]

// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

// So, the setter call admin.fullName= uses admin as this, not user

// That is actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it.
// And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object

let animal2 = {
    eats: true
  };
  
let rabbit = {
jumps: true,
__proto__: animal2
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats


// Here we have the following inheritance chain: rabbit inherits from animal, 
// that inherits from Object.prototype (because animal is a literal object {...}, so it’s by default), and then null above i





