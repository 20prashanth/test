function clearscreen() {
    document.getElementById('num').value= '' ;
    
}
function solve(){
   let x = document.getElementById('num').value
    let y = eval(x);
    document.getElementById('num').value = y;
    return y;
}

   