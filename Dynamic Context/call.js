// the call method calls a function with given this value and arguments individually.
function greet(name) {
    var reply = [
        name,
        this.animal,
        'typically sleep between',
        this.sleepDuration 
    ].join(' ');

    console.log(reply);
}

var obj = { 
    animal:'cats',
    sleepDuration:'12 and 16 hours'
};

greet.call(obj, 'aman');