// in DOM event handler this is set to the element the, event was fired from

function bluify(e){
    console.log(this === e.currentTarget);

    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
}

// target  = element that triggered event
// currentTarget = element that listens to the event

// in an inline event handler
// when the code is called from an inline on-event handler, its this is set to the DOM element on which the listener is placed

// ES6 has the concept of modules and ES5 has the concept of the window and not modules
// can be converted to the module by defining the type="module" in script tag in html

// in node Cjs modules 


// TODO:Ask Sir
console.log(this == global)

function foo(){
    return this
}

console.log(foo() == global);

console.log(this == exports);
//  this is bound to exports object
