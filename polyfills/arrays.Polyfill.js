// Polyfill for map 

Array.prototype.myMap = function(cb){
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

// Polyfill for filter

Array.prototype.myFilter = function(cb){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

// Polyfill for reduce 
Array.prototype.myReduce = function(cb, initial){
    let reducedVal = initial;
    for (let i = 0; i < array.length; i++) {
        reducedVal = reducedVal ? cb(reducedVal, this[i], i, this):this[i]
    }
    return reducedVal
    
}


// map vs forEach 

// map return the new array but for each does not return the new array and make changes in the current array 
// map can get chaining function as it return an array