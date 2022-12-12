// CHAINING OF PROMISE
// chaining of promise mean that the result of one promise will be fed to the next promise
// very analogous to the Unix Pipe operator.

// asyncFunc1()
// .then(result1 => {
        // Use result1
        // A
        // return asyncFunction2();
// })
//  .then(result2 => {
        // Use result2
        // B
// })
// .catch(err => {
    // Handle errors of
    // asyncFunc1() and asyncFunc2()
// })

const delay = (ms) =>
    new Promise(function (resolve, reject){
        setTimeout(() => resolve(Math.random() * 1000), ms);
    });

delay(2000).then(() => {
    return 10;
})
.then((num) => {
    return num**2;
})
.then((num) => {
    return num;
})
.then(console.log);


const p = delay(1000); // The promise is executed here

p.then(console.log); // the same value will be here for all three
p.then(console.log);
p.then(console.log);

// Error handling with promises

const pErr = new Promise(function(){
    throw new Error('a')
})

pErr.catch((err) => console.log('caught', err));

// A promise can reject by
    // by calling the reject function
    // by throwing inside a then handler or executor function
        // when a promise rejects, the control jumps to the closest rejection handler


// Unhandeled Promises
// it will throw an error for unhandeled promise rejection










