// Polyfill for call method

let car1 = {
    color:"Red",
    company:"Ferrari"
}

function purchaseCar(currency, price){
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`)
}


// polyfill for call

Function.prototype.selfCall = function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "is not callable");
    }
    context.fn = this;
    context.fn(...args);
}
purchaseCar.selfCall(car1, " $", "54390");

// polyfill for apply

Function.prototype.selfApply = function(context = {}, args = []){
    if(typeof this !== 'function'){
        throw new Error(this + "is not a function")
    }
    if(!Array.isArray(args)){
        throw new Error(args + "is not an array")
    }
    context.newFunc = this;
    context.newFunc(...args);
}

purchaseCar.selfApply(car1, [" $", "54390"]);

// polyfill for bind

Function.prototype.selfBind = function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "is not a function")
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    };
}

