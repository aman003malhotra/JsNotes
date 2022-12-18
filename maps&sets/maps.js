const { map } = require("lodash");

// The map data structure in ECMA Script 6 lets you use arbitrary values as keys and is highlt welcomw
map.set('foo', 123)
console.log(map.get('foo'));

console.log(map.has('foo'))
console.log(map.delete('foo'))
console.log(map.has('foo'))


// You can set map by using iterables over key-value pairs(array with two elements)


// Objects vs Maps
// Accidental Keys 

// Map API 
Constructor 
// new Map(entries? : Iterable<[any, any]>);

// Handling Single Entries 
// => Map.prototype.get(key)
// => Map.prototype.set(key, value)
// => Map.prototype.has(key)
// => Map.prototype.delete(key)

// Handling All Entries
// => get Map.prototype.size
// => Map.prototype.clear()

