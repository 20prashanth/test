function clearscreen() {
    document.getElementById('result').value= '' ;
    
}

function display(val) {

    document.getElementById('result').value += val;
    return val;
}




function displayeq(){
   let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}
 
function backspace(){
    let z=document.getElementById('result').value;

    
    document.getElementById('result').value=z.substr(0,z.length-1);
}


