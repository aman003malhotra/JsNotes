// "new" binding

// constructor function "construct" objects. they are equivalent to classes in other languages
// Since Javascript has no concept of a class(even though it has class keyword), function rise up to the task
// a function when used with the new operator, is called constructor function. the new operator changes the behaviour of the function

"use strict" 

function Person(name){
    // new keyword does two things
    // 1 this = {}
    this.name = name;
    // 2 return this;
}
// if we just write this then the this becomes global and global.name == 'aman' but it can be prevented with using strict mode and it will throw error
// Person('aman');
// console.log(global);


const person1  = new Person('Arfat');
console.log(person1, typeof person1);






