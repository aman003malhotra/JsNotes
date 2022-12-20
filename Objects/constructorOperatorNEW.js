// Constructor Function
// They are named with capital letter 
// They should be executed with "new" operator.

function User(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this; 
  }

let user1 = new User("Jack");


// When a function is executed with new, it does the following steps:

// ==> A new empty object is created and assigned to this.
// ==> The function body executes. Usually it modifies this, adds new properties to it.
// ==> The value of this is returned.

// Inside a function, we can check whether it was called with new or without it, using a special new.target property.
// (already Explained in Prototypes/constructor.js)



// Return from constructors
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

// ==> If return is called with an object, then the object is returned instead of this.
// ==> If return is called with a primitive, it’s ignored.
// (already Explained in Prototypes/constructor.js)


function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */