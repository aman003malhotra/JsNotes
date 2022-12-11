var debounce = require('lodash.debounce');


function debounceSelf(fn, time){
    let timeoutId;
    return function internal() {
        // previous timeout is gone
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
        fn();
    }, time);   
    }
}
let user = {
    name: 'arfat',
    printName(){
        console.log(this.name);
    },
}

const debounced = debounceSelf(user.printName.bind(user), 1000);

for(let i = 0; i < 1000; i++){
    debounced();
}