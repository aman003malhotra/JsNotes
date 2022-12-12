// Promises(aka futures, deferred)

// A promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

// an object which represents and manage the lifecycle of a future result.

const p = new Promise()
// The argument to the promise function should be an executer function and it has to be  a function

const wait = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve,ms)
});

wait(2000).then(()=>console.log('after 2 seconds'));

// Promises States

// A promise is always in one of the three mutually exclusive states
// ==> Before the result is ready, the promise is pending.
// ==> If a result is available, the Promise is fulfilled.
// ==> If an error happened, the promise is rejected.

// A promise is settled if "things are done" (if it is either fulfilled or rejected)
// A promise is settled exactly once and then remains unchanged. //! VERY IMPORTANT

// A thenable is an object that has a promise style then() method.

const p2 = new Promise(function(resolve, reject){
    // resolve(10); console.log(p2) ==> Promise{ 10 }
    // setTimeout(()=> resolve(10), 1000); console.log(p2) ==> Promise{ <pending> }
    // reject(10) console.log(p2) ==> Promise{ <rejected> 10}
})

// Consuming Promises
// A promise object servers as a link between the executor and the consuming functions, which will receive the result of the error
// Consumer can be registered using one of the following methods
// .then() for resolve
// .catch() for reject
// .finally() for both

// Promise.prototype.then(undefined, onRejected)
    // takes two function
        //onFulfilled 
        // onRejected
    // the .then is executed only after a promise is resolved.
    // the .then always returns a promise. 
p.then(
    (val) => console.log(`val - ${val}`),
    (val) => console.error(`error - ${val}`)
)

p.catch((err) => {
    console.log(err);
})
    // .catch is used on rejection
    // if the promise is rejected, the next nearest .catch is called.
    // The .catch itself returns a fulfilled promise by default, so you can continue chaining.

.finally(()=> {console.log('finally')})


    // When the promies is settled, i.e. either fulfilled or rejected,the specified callback function is executed.
    // the finally() method is very similar to calling .then(onFinally, onFinally)

// You can attach handlers to settled promises later
// The consumer callbacks do not have to be attached at the moment of Promise construction.

let promise = new Promise((resolve) => 
    setTimeout(() => resolve('done'), 1000)
)
.then(console.log)
