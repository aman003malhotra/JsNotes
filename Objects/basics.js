// An empty object (“empty cabinet”) can be created using one of two syntaxes

let user = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  }


console.log(user.name)
console.log(user.age)

user.isAdmin = true;

console.log(user);

// To remove a property, we can use the delete operator

delete user.age;
console.log(user);

user2 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

// For multiword properties, the dot access doesn’t work

// this would give a syntax error
// user2.likes birds = true

user2["likes birds"]


// a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
console.log( obj.for + obj.let + obj.return );  // 6

console.log( "age" in user2 ); // true, user.age exists
console.log( "blabla" in user2 ); // false, user.blabla doesn't exist

for (let key in user2) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user2[key] ); // John, 30, true
  }



// The “integer property” term means a string that can be converted to-and-from an integer without a change.


// if the keys are non-integer, then they are listed in the creation order














