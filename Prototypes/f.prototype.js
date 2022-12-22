let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  alert( rabbit.eats ); // true
//   Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal"


//   F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.

//   If, after the creation, F.prototype property changes (F.prototype = <another object>),  then new objects created by new F will have another object as [[Prototype]],
//  but already existing objects keep the old one.

// The default "prototype" is an object with the only property constructor that points back to the function itself.
