// express is a framework
// node is a runtime 

// The v8 engine(javascropt engine of google chrome) contains two components

// Memory Heap - this is where the memory allocation
// Call Stack - this is where the stack frames are as your code executes.It basically records where in the program we are. If we step into a function, we put
// it on the top of the stack. if we return from a function, we pop off the stack.

// We have the things called web APi's which are provided by browsers, like the DOM, AJAX, setTimeout and much more, And then we have the so popular event loop.
// and the callback queue 

// Javascript is by default, single threaded, synchronous programming language.It has one call stack, one stack frame is executeed each time.

// JAVASCRIPT CALLBACKS

// in order to perform asynchronous processing then waiting for a function to complete its execution, 
// a process is told to call another function when the result is ready. 

// This other function is called the callback. it is passed as an argument to any asynchronous function.

// if we introduce multiple asynchronous functions by nesting it can lead to callback hell.
// Here each subsequent callback takes an argument from the previous callbacks. This sequence make the code structure look like pyramid.

// if there is an error in one function, all other functions would also get affected, making error handling more complicated


// async keyword can be placed before a function
// word “async” before a function means one simple thing: a function always returns a promise

async function f() {
    return 1;
  }
  
  f().then(console.log); // 1

// await makes JavaScript wait until that promise settles and returns its result.

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves 
  
    alert(result); // "done!"
  }
  
