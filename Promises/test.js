
let promise = Promise.reject(new Error("Promise Failed!"));
window.addEventListener('unhandledrejection', event => alert(event.reason));
setTimeout(() => promise.catch(err => alert('caught')), 0);