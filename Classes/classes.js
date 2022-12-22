class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // proof: User is a function
  alert(typeof User); // function


// What class User {...} construct really does is:

// 1. Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// 2. Stores class methods, such as sayHi, in User.prototype

// Class is not exactly a syntactic sugar because

// 1. First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.
// 2. Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

// Classes always use strict. All code inside the class construct is automatically in strict mode.

// classes may include getters/setters, computed properties

class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }


  
  let user = new User("John");
  alert(user.name); // John
  
  user = new User(""); // Name is too short.

//   The important difference of class fields is that they are set on individual objects, not User.prototype
  class User {
    name = "John";
  }
  
  let user2 = new User();
  alert(user2.name); // John
  alert(User.prototype.name); // undefined

class Button {
constructor(value) {
    this.value = value;
    this.click = this.click.bind(this); // binding the function
}

click() {
    alert(this.value);
}
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

// The problem is called "losing this".

// There are two approaches to fixing it, as discussed in the chapter Function binding:

// 1. Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
// 2. Bind the method to object, e.g. in the constructor.
