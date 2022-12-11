function C(){
    this.a = 37;
}

// C() not a constructor function
var o = new C();
console.log(o.a);

function C2(){
    this.a = 37;
    return {
        a:38
    }
}

o = new C2();
console.log(o);

// When a function is executed with the new keyword, it does the following steps:
// ==> A new empty object is created and assigned to `this`.
// ==> The prototype of this object is changed <FnName>.prototype
// ==> The function body executes.Usually it modifies this, adds new properties to it.
// ==> A value of `this` is returned
// You can override the return value by returning another object.

function Person(name, age){
    // this = {}
    // Object.setPrototypeOf(this, Person.prototype)
    this.age = age;
    this.name= name;

    // let userHasWrittenReturn = false
    //    if(userHaswrittenReturn){
    //     let returnValue be a user's return value
    //         if(returnValue is object){
    //             return returnValue
    //         }
    //         return this;
    //    }
    //    return this;
        
}

Person.prototype.printName = function(){
    console.log(this.name.toUpperCase())
}

const p1 = new Person('a', 25);
const p2 = new Person('b', 27);

p1.printName()

// A constructor function should always be called with a new;

// without `new` we will apply this == global


// to prevent this we can add an if statement and throw an error

function PersonThrowError(name, age){
    console.log(new.target); // undefined
    if(!new.target){
        throw new Error('should use new')
    }
    this.age = age;
    this.name= name;
}


p = new PersonThrowError('a', 10);
