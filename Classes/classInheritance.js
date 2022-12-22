// Class inheritance is a way for one class to extend another class.

import { method } from "lodash";

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
}
  

let animal = new Animal("My animal");


class Rabbit extends Animal {
hide() {
    alert(`${this.name} hides!`);
}
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

// Internally, extends keyword works using the good old prototype mechanics. It sets Rabbit.prototype.[[Prototype]] to Animal.prototype. 
// So, if a method is not found in Rabbit.prototype, JavaScript takes it from Animal.prototype.

// In case of overlapping the child function will be preferred over the parent method, but we can access the parent
// method by using super.method() for accessing the method, super() for accesssing the constructor.


// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this. 
// If we reference this from such a function, it’s taken from the outer “normal” function.


// OVERRIDING CONSTRUCTOR
// if a class extends another class and has no constructor, then the following “empty” constructor is generated

class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
}


class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
      }
}
