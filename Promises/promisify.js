// promisification
// It’s the conversion of a function that accepts a callback into a function that returns a promise.

// a promise may have only one result, but a callback may technically be called many times.

// So promisification is only meant for functions that call the callback once'

// TODO:Ask Sir
const myPromisify = (fn) => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        function customCallback(err, ...results) {
          if (err) {
            return reject(err)
          }
          return resolve(results.length === 1 ? results[0] : results) 
         }
         args.push(customCallback)
         fn.call(this, ...args)
       })
    }
 }