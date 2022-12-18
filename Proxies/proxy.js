// Meta programming

// programming with the ability to treat programs as data.
// Reading, analysing, or transforming itself, while running

// Reflective metaprogramming means that a program processes itself

// Three kinds of meta programming
// ==> Introspection - read only access to the structure of program
// ==> Self modification - you can change that structure
// ==> Intercession - you can redefine the semantics of some language operations.

// Proxy 
// proxies enable you to intercept and customize operations performed on objects(such as getting, setting properties invoking functions and others )
// They overload operators such as '.' and 'new'.


// Creating a proxy
// ==> creating a proxy using the proxy constructor
// ==> it accepts two parameters: target and handler


const target = {
    name:'arfat'
};
const handler = {};
const proxy = new Proxy(target, handler)








