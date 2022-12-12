// inhertitance and Subclassing 

// in prototype based language, inheritance is the mechanism of basing an object or class upon another object


// ===================CLASSES IN ES5 ====================

function Person(name){
    this.name = name;
}

Person.prototype.printName = function (){
    console.log(this.name);
}

function Employee(name, id){
    Person.call(this, name);
    this.id = id
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);//(child , obj)

Employee.prototype.printId = function (){
    console.log(this.id)
}

const e  = new Employee('aman', 42);

e.printId();
e.printName();


// ==================Classes in ES6======================

// ES6 classes are not something that is radically new: They mainly provide more convenient syntax to create old-school constructor function

class Person6 { // typeof gives a function, so ES6 is syntactically different but internal functioning is same
    constructor(name){
        this.name = name;
    }
    printName6(){
       console.log(`Person named ${this.name}`);
    }
    // static logNames(persons){
    //     for (const person of persons){
    //         console.log(person.name);
    //     }
    // }
}


class Employee6 extends Person6{
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    
    printId6(){
        console.log(this.id);
    }

}

const e6  = new Employee6('aman', 42);

e6.printId6();
e6.printName6();


// =======================SUBCLASSING==================

// The extends clause lets you create a subclass of an existing constructor (which may or may not have been defined via a class);

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `(${this.x} , ${this.y}`;
    }
}

class ColorPoint extends Point {
    constructor(x,y, color){
        super(x,y); // for initializing point
        this.color = color;
    }
    toString(){
        return super.toString() + ' in ' + this.color;
    }
}




// There are two ways of using super:
// ==> a class constructor uses it like a function call (super(...)), in order to make a super constructor call (line A)
// ==>  Method definition (in object literals or classes, with or without static) use it like property references (super.prop) or method calls (super.method())
// in order to refer to super properties.


// In derived class you must call super() before you can use this.
// Overriding the result of constructor