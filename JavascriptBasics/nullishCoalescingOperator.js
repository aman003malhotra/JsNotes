// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values.
// If any of these is the first argument of ||, then we’ll get the second argument as the result.
















