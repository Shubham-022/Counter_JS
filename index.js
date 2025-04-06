const constValue=document.querySelector('#counter');
function increment(){
    let value=parseInt(constValue.innerText);
    value=value+1;
    constValue.innerText=value;
}

function decrement(){
    let value=parseInt(constValue.innerText);
    value=value-1;
    constValue.innerText=value;
}