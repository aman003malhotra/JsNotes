// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined

// Objects are “heavier” than primitives. They require additional resources to support the internal machinery.
// In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

// The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.
// Here’s what actually happens in str.toUpperCase():

// ==> The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
// ==> That method runs and returns a new string (shown by alert).
// ==> The special object is destroyed, leaving the primitive str alone.

// The special primitives null and undefined are exceptions. They have no corresponding “wrapper objects” and provide no methods. In a sense, they are “the most primitive”