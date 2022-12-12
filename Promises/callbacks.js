// Javascript is single threaded
// code is generally synchronous
// javascripts interprets each line right awway before moving to what's next
// io code is expected to be non-blocking

// USING CALLBACKS
// By default async in js is all about callbacks
// Callbacks gets an otherwise blocking long lived function out of the loop. They are exception to sequential 'blocking' execution.
// callbacks don't return values they have side-effects.

// ==============DISADVANTAGES OF CALLBACKS===============

// Readability is affected as Pyramid of Doom / callback hell is made.
// Complexity increases and non sequential execution takes place.
// Debugging is difficult as the callback is executed much later so the stack trace is different.
// Loss of control flow as return does not return to the parent function.
// Loss of error handling as exception won't be caught be the parent function.
// Sync/Async Ambiguity as foreach acts as a blocking function
