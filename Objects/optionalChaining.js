// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

// In other words, value?.prop:

// works as value.prop, if value exists,
// otherwise (when value is undefined/null) it returns undefined.

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

// if there’s no variable user at all, then user?.anything triggers an error:

// ReferenceError: user is not defined
// user?.address;
// The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.

let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)


// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

// ?.() is used to call a function that may not exist.

// ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases

// delete user?.name; // delete user.name if user exists

// ?. does not work for writing