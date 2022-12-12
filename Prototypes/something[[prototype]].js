// Distinguishing between .prototype and [[Prototype]]

// ==> [[Prototype]] is an internal property present on all objects.
    // ==> it is a special property.
    // ==> It's value may either be another object's reference or null.

// ==>.prototype is an object.
    // ====> it is present only on functions(defined using the 'function' keyword). (non arrow function) as arrow functions can not be constructors
    // ===> It contains (generally) values and methods shared by all objects of that "class".
    // ===> It is not special in that sense of [[prototype]]


// Two Important Rules
// ==> An object (by default) always inherits from it's creator function (or class) '.prototype' object.
// ==> For {}, the creator is Object function. Hence, it inherits from the Object.prototype. 
// ==> For [], the creator is Array function. Hence, it inherits from the Array.prototype. 
// ==> For a Person instance p, the creator function is Person Function. Hence, it inherits from Person.prototype.

// Object.prototype's prototype is null