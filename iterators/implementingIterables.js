let obj = { 
    // iterable
    [Symbol.iterator](){
        let i = 0;        
        return { 
            // iterator
            next(){
                return {value:i++, done:i > 10}
            }
        }
}};
// console.log(obj.next())
for (const el of obj){
    console.log(el.next);
}

// Where iterators are iterables
let obj2 = { 
    // iterable
    _i : 0,
    [Symbol.iterator](){
        return this;
    },
    next(){
        return {value:this._i++, done:this._i > 10}
    },
    // gives an iterator the oppurtunity to clean up if an iteration ends prematurely
    return(){
        console.log('abrupt completion')
        return {done:true};
    } 
};


// CLOSING ITERATOR VIA return()
// In for of loops, premature(or abrupt, in spec language) termination can be caused by:

// ==>break
// ==> continue
// ==> throw
// ==> return









