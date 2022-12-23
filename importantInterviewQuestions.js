// infinite currying

import { sum } from "lodash";

function add(a){
    return function(b){
        if(b) return add(a+b)
        return a;
    }
}

console.log(add(4)(9)(13)())


// currying a function

// sum(a+b+c) => sum(a)(b)(c)

function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args);
        }else{
            return function(...next){
                return curriedFunc(...args, ...next);
            }
        }
    }
}