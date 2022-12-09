// in DOM event handler this is set to the element the event fired from

function bluify(e){
    console.log(this === e.currentTarget);

    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
}