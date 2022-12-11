// Accessing the prototype

// object.prototypeOf
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1));

console.log(Object.getPrototypeOf(object1) === prototype1);

console.log(Reflect.getPrototypeOf(object1) === prototype1); // newer available in ES6 and above

// tells if a certain object is a prototype of another object or not
console.log(prototype1.isPrototypeOf(object1));

// dunder proto because its double underscore proto and it is not recommended because not all browsers are compatible with this
// __proto__


// MODIFYING EXISTING PROTOTYPES


console.log(object1.__proto__);
const obj = {
    getNumber(){
        return 42;
    },
}

const child = {};

console.log("before setting", child.getNumber);

Object.setPrototypeOf(child, obj);

console.log("after setting", child.getNumber);

// we can also set the value to the null or delete the object
// Object.setPrototypeOf(child, null); OR child.__proto__ = null;

// CREATING AN OBJECT WITH A NEW PROTOTYPE

var proto = {
    describe: function(){
        return 'name ' + this.name;
    },
}
// Create a new object whose prototype is `proto`
var objcr = Object.create(proto);
objcr.name = 'obj';

console.log(objcr.describe());

// ==> whenevr you access a property via obj, Javascript starts the search for it in that object and continues with its prototype, the prototype's prototype, and
//      so on.
// ==> a property in an object overrides a property with the same key in a later object : the former property is found first.
