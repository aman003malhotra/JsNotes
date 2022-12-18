// Uncomment each example separately and run it

// EXAMPLE 1
let count = 0;

setTimeout(function(){
    count++;
    console.log(`In SetTimeout - ${count}`);
}, 1000);

console.log(`${count}`); 

// TODO:AskSirtoexplainitIIFE
// NOTE
// IIFE - an IIFE (Immediately invoked function expression) is a javascript function that runs as soon as it is defined.


// EXAMPLE 2
// function a(){
//     let fn;
//     {
//         var x = 5;
//         fn = function(){
//             console.log(x);
//         };
//     }
//     return fn;
// }

// var x = 10;
// const b = a();
// b();


// Example 3
// function abc(x) {
//     var a = 10;
//     return function (y) {
//         return a + y;
//     };
// }

// a = 50;

// var inner = abc(20);

// function foo(){
//     var a = 30;
//     console.log(inner(5));
// }

// foo()


// NOTE: At no time this var a in the foo is going to get accessed

// Example 4

// (function immediateA(a){
//     return (function immediateB(b){
//         console.log(a)
//     })(1);
// })(0);

// Example 5

// function createIncrement(){
//     let count = 0;
//     function increment(){
//         count++;
//     }

//     let message = `Count is ${count}`;
//     function log(){
//         console.log(message);
//     }

//     return [increment, log]
// }

// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();

// Example 6
// function createUser(initialName){
//     let name = initialName;

//     return{
//         getName(){
//             return name;
//         },
//         setName(newName){
//             name = newName;
//         }
//     };
// }


// let p1 = createUser('arfat');
// let p2 = createUser('salman');

// p2.setName(null);

// console.log(p1.getName());