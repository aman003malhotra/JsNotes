// while (condition) {
    // code
    // so-called "loop body"
//   }

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// DO WHILE LOOP
// do {
    // loop body
//   } while (condition);

let l = 0;
do {
  alert( l );
  l++;
} while (l < 3);


// we can force the exit at any time using the special break directive.

// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one 