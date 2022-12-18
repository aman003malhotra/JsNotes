// ITERATORS
// JS has new looping construct in ES6, for-of

for (const x of [1,2,3]){
    console.log(x)
}

// for of allows iteration over many kinds of structures, not just lists

// iterating over objects(maps and sets)

const map = new Map([
    [65, 'A'],
    [66, 'B'],
    [67, 'C']
]);


for (const [key, value] of map) {
    console.log(key, value);
}

for (const pair of map) {
    const [key, value] = pair;
    console.log(key, value);
}


// Iterating over string

// if you iterate over a string you get "characters"

const emojis = 'aasdfsdf';

for (const char of emojis) {
    console.log(char);
}


// Spread and Rest Operators (in ES6)

const map2 = new Map([
    [65, 'A'],
    [66, 'B']
]);

const[[key, value], secondEl] = map2;
console.log(key, value, secondEl)


const emojis2 = 'a😂😂😂😊😂😊b';

let [firstChar, firstEmoji , ...rest] = emojis2;

console.log(firstChar); // a
console.log(firstEmoji); // 😂
console.log(rest); // [ '😂', '😂', '😊', '😂', '😊', 'b' ]

console.log(...emojis2);// a 😂 😂 😂 😊 😂 😊 b


// ITERATORS
// An iterable is an object that has an Symbol.iterator method which returns an iterator
// Iterators are objects with next() defined. They
// return the next value in the iteration
// remember the state during iteration
// update the state to point at the next value.
// signal when it is done when done is true.

const iter = emojis2[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// Iterables
// ES6 introduces a new mechanism for traversing data:
// iteration. Two concepts are central to iteration 

// An iterable is a data structure that wants to make its element accessible public. It does so by implementing a method whose key is
// Symbol.iterator. that method is a factory for iterators

// an iterator is a pointer for traversing the elements of a data structure (think cursors in database).

const obj = {
    [Symbol.iterator](){
        return{
            next(){}
        }
    }
}





