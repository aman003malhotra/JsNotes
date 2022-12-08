// Object Methods
// Methods are actions that can be performed on objects

let obj = {
    firstName: 'arfat',
    print() {
        return this.firstName;
    },
};


// `this` inside methods
// Unlike other languages(such as java), `this` is not bound to any specific object in Javascript.
// The `this` value can be modified in a couple of way
//  => Default Binding (when no object is supplied)
//  => Implicit binding (when an object is supplied naturally)
//  => Arrow Functions (when arrow functions are used) 
//  => Explicit Binding(when call ,bind , or apply is used)
//  => new binding(When `new` keyword is used )
//  => strict mode (When using 'use strict' )
//  => Contextual (libraries or frameworks may change values for eg. event matters)


// IMPORTANT RULES
// => this is not a compile time binding but run time binding
// =>  this has nothing to do with the where and how the function is declared but have everything to do with how that function is invoke/called


// DEFAULT BINDING 
// => Standalone function invocation 
// => If no other binding rule matches, then it is default binding, it sort of works like default catch all rule.

function print() {
    // this here becomes global in node.js
    // window in the browser
    console.log(this.firstName);
}

print();


// IMPLICIT BINDING
function foo(){
    // this = obj when called like obj.funcs()
    console.log(this.a);
}

const obj2 = {
    a : 2,
    funcs : foo,
}
foo();
obj2.funcs();// =>  this has nothing to do with the where and how the function is declared but have everything to do with how that function is invoke/called


// Implicit binding rule says that its adjoining object which should be used for the function call's this is binding.

// IMPLICIT LOST
function foo() {
    console.log(this.a);
}

const obj3 = {
    a :2,
    doo:foo,
}
obj3.doo();
const bar  = obj3.doo;
bar();// this has nothing to do with the where and how the function is declared but have everything to do with how that function is invoke/called


var counter = {
    count:0,
    inc:function(){
        console.log('inc was called');
        this.count++;
    },
};

// counter.inc();
// console.log(counter.count);


// this is same as
var fn = counter.inc;
fn();


setTimeout(counter.inc, 1000); //this is not same as counter.inc();
setTimeout(()=>{
    console.log(counter.count)
}, 2000);

// we have called the value of counter.inc as a function
// Hence this is the global object we have performed window.count++.
// window.count does not exist and is undefined applying the ++ operator so it sets it to NaN.
// Use Strict mode for avoiding this.


var obj4 = {
    firstName: 'Jane',
    friends: ['Tarjan', 'Cheetah'],
    loop: function(){
        this.friends.forEach(function (friend) { // story would be different for arrow function
            console.log(this.firstName + " knows " + friend)
        });
    }
}

obj4.loop();

// WORKAROUND 1
console.log("USING STRICT")
var obj5 = {
    
    firstName: 'Jane',
    friends: ['Tarjan', 'Cheetah'],
    loop: function(){
        // TODO:ASKSIR this and that
        'use strict';
        var that = this;
        this.friends.forEach(function (friend) { // story would be different for arrow function
            console.log(that.firstName + " knows " + friend)
        });
    }
}

obj5.loop();


// WORKAROUND 2
// use bind
console.log("USING BIND")
var obj6 = {
    firstName: 'Jane',
    friends: ['Tarjan', 'Cheetah'],
    loop: function(){
        this.friends.forEach(function (friend) { // story would be different for arrow function
            console.log(this.firstName + " knows " + friend)
        }.bind(this));
    }
}

obj6.loop();

// WORKAROUND 3
console.log("Passing this value in the forEach");
var obj7 = {
    firstName: 'Jane',
    friends: ['Tarjan', 'Cheetah'],
    loop: function(){
        this.friends.forEach(function (friend) { // story would be different for arrow function
            console.log(this.firstName + " knows " + friend)
        }, this);
    }
}

obj7.loop();


// WORKAROUND 4
console.log("Arrow Function");
var obj7 = {
    firstName: 'Jane',
    friends: ['Tarjan', 'Cheetah'],
    loop: function(){
        this.friends.forEach( (friend) => { // story would be different for arrow function
            console.log(this.firstName + " knows " + friend)
        });
    }
}

obj7.loop();