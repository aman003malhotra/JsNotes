function sum(a,b){
    return this.a + this.b;
}

console.log(sum()) // undefined + undefined = NaN

// sumB is a different function
const sumB = sum.bind({a: 10, b:20});
console.log(sumB());

console.log(sum === sumB)
// When you bind something it permanently bound

//Definition => the bind() method creates a new function that, when called has this keyword set to provided value, with a 
// given sequence of arguments preceding any provided when the new function is called

function product(a, b){
    return a * b;
}

const double = product.bind(null,2)
console.log(double(200)) // return 400









