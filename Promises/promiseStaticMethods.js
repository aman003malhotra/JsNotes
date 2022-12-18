// Promise Static methods (API)


// Promise Construction

// Promise.resolve
// There are 3 main major behaviors of resolve

    // 1. For most values x, it returns a Promise that is fulfilled with x.

Promise.resolve('abc')
.then(x => console.log(x)); //it makes a promised version of a certain value

    // It can be also written as
function resolve(val) {
    return new Promise((res) => {
        res(val);
    })
}

    // 2. if x is a promise then x is returned unchanged

        // function to check if the argument is a promise
        function isPromise(p){
            return Promise.resolve(p) === p;
        }

    // 3. if x is thenable, it is converted to a Promise: the settlement of the thenable will also become the settlement of the Promise. 
        // thenable object
        let thenobj = {
            then(){

            }
        }

        

// Promise.reject