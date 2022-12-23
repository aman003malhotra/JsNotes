// polyfill for once function
function once(func, context){
    let ran;
    return function(){
        if(func){
            ran.apply(context || this, arguments);
            func = null;
        }
        return ran;
    }
}