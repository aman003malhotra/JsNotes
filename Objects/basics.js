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

// ============================================================
// Object references and copying

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.


let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

// Two objects are equal only if they are the same object.



let a = {};
let b = {}; // two independent objects

console.log( a == b ); // false


// For duplicating an object
// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.


// Object.assign(dest, ...sources)

// ==> The first argument dest is a target object
// ==> Further arguments is a list of source objects

let user4 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user4.name); // John
alert(user4.canView); // true
alert(user4.canEdit); // true


let clone = Object.assign({}, user4);

alert(clone.name); // John


// ======================== structuredClone ====================================
// The call structuredClone(object) clones the object with all nested properties.

user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related


// the structuredClone works for circular reference 

// structuredClone fails for function in an objects



// ============================= GARBAGE COLLECTION ======================================

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

delete family.father;
delete family.mother.husband;


// Outgoing references do not matter. Only incoming ones can make an object reachable. 
// So, John is now unreachable and will be removed from the memory with all its data that also became unaccessible.


// Some of the optimizations:

/* Generational collection – objects are split into two sets: “new ones” and “old ones”. In typical code, many objects have a short life span: they appear, do their job and die fast,
so it makes sense to track new objects and clear the memory from them if that’s the case. 
Those that survive for long enough, become “old” and are examined less often.*/

/* Incremental collection – if there are many objects, and we try to walk and mark the whole object set at once, 
it may take some time and introduce visible delays in the execution. 
So the engine splits the whole set of existing objects into multiple parts. And then clear these parts one after another.
There are many small garbage collections instead of a total one. That requires some extra bookkeeping between them to track changes,
but we get many tiny delays instead of a big one.*/

/* Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.*/

