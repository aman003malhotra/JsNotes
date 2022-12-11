// Everything in JS is javascript

// const { method } = require("lodash");

// anything that is not a primitive value is an object. that includes arrays, functions, and object themselves
// an object is a collection of properties 
// a property is a named container for a value with some additional attributes.

// the name of a property is called a key;thus an object can be considered as a collection of key value pairs.


// ===================PROPERTIES=======================

let obj = {};
// if the key is not a string then it is automatically converted into the string
obj[obj] = 10;
console.log(obj);


// 1. all objects in javscript are maps(dictionaries) from string values.

// 2. a (key, values) entry in an object is called a property. the key of a property is always a text string(ES5).

// ==================3 Kind of Properties ========================

// ==> properties(or named data properties)
// ==> accessors(or named accessor properties)
// ==> Internal properties
//   ====> exist only in ECMAScript Language specification



// ================== Creation of objects ==========================

// =====First Way
let objFirst = {};


// An object property name can be any valid JavaScript string or anything that can be converted to a string. including the empty string.

// the values can be of any value type

// the nesting of objects can be arbitrary and cyclic too!

const objCirc = {};

objCirc['ab'] = objCirc;

console.log(objCirc.ab);


// =====Second Way
// Object Constructor
const objCons = new Object();
objCons.name = 'aman'

console.log(objCons.name);

// this effect of this code and the literal notion is the same.

// it is advised not to use this pattern.It can lead to some security issues.

// ==========================Object.create=====================


// =====Third Way
const newObj = Object.create(Object.prototype);

newObj.name = 'arfat';
// this lets you specify the "prototype" of an object at the time of definition


// Function as Key Values
// ==>in an object when we have a function as a values to a key, then the function is called method.This is one of the most important features of objects
const objFunc = {
    fName: 'Alex',
    lName: 'Martin',
    printFullName(){
        return this.fName + ' ' + this.lName;
    },
}
console.log(objFunc.printFullName());

// ==> the method have access to the key-value pairs of the object.
// ==> They can specify behavior in an object.




// Accessing Properties (reading a property)
var jane={
    name:'jane',
    'desc.func':function(){
        return `person named ${this.name}`;
    }
}
// if the property name has a dot then the dot notation does not apply for accessing the object

console.log(jane['desc.func']());

// accessing non-existent properties will give undefined


// ADDING AND UPDATING PROPERTIES
// jane.name = 'aman'
// jane['name'] = 'sam'


// we can also assign other type of value like a method property can be converted to integer value.

// Deleting Properties
// Deletion is performed using the delete operator. Again, we can use both the notations
delete jane.name;
delete jane['desc.func']
console.log(jane['desc.func']);




