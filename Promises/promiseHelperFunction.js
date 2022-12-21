// Promise.all lets you know when either all the promises have been fulfilled or when one of them rejects
function sleep(ms, value) {
    return new Promise((resolve => {
        setTimeout(()=> resolve(value), ms)
    }))
}

// an already resolved promise if the iterable passes is empty.
Promise.all([sleep(6000,'a'), sleep(2000, 'b'), sleep(3500, 'c')])
.then(() => {
    console.log('finished');
})

// Please note that the order of the resulting array members is the same as in its source promises. 
// Even though the first promise takes the longest time to resolve, it’s still first in the array of results.

// Promise.all([
//     asyncFunc1(),
//     asyncFunc2(),
// ])
// .then(([result 1, result 2])=> {

// })
// .catch(err => {
//     // receives the first rejection among the promises
// })


// Promise.race() It takes an iterable over Promises (thenables and other values are converted  to Promise via Promise.resolve() and returns a promise P)
// The first of the input Promise that is settled passes its settlement on to the output promise.
// if iterable is empty then promise.race is never settled.

// Promise.race([
//     httpGet('http://example.com/file.txt'),
//     delay(5000).then(function() {
//         throw new Error('Timed out')
//     });
// ])
// .then(function(text) {...})
// .catch(function(reason) {...})


// Promise.allSettled method returns a promise that resolves after all of the given promises have either 
// settled, with an array of objects that each describes the outcome of each promise 

// Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has

Promise.allSettled([Promise.resolve('a'), Promise.reject('a')])
.then(arr => {
    console.log("allSettled",arr)
})

// check what happened with all the promises


// Promise.any gives you a signal as soon as one of the promise is fulfilled
// It is similar to promise.race except any does not reject early when one of the promise rejects
//  it is waiting any one of them to succeed or for all of them to fail

const pErr = new Promise((resolve, reject) => {
    reject('Always fails');
});

Promise.any([pErr, sleep(500, 'value')])
.then(console.log)
.catch((err) => {
    console.log(err);
    console.log(err.errors);
})





