class User {
    static staticMethod() {
      alert(this === User);
    }
}
  
// static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.
// Static methods are callable on classes, not on individual objects.


// Static properties are also possible, they look like regular class properties, but prepended by static
class Article {
    static publisher = "Ilya Kantor";
  }
  
alert( Article.publisher );


// Static properties and methods are inherited.

// So, Rabbit extends Animal creates two [[Prototype]] references:

// 1. Rabbit function prototypally inherits from Animal function.
// 2. Rabbit.prototype prototypally inherits from Animal.prototype


// TODO:Ask Sir
// https://javascript.info/static-properties-methods (tasks)