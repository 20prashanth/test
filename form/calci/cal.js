
function add(){
    var a=parseInt(document.getElementById('num').value);
    var b=parseInt(document.getElementById('num1').value);

    var c=a+b;
    document.getElementById("cal").innerHTML = c;
  
}


function min(){
    var a=parseInt(document.getElementById('num').value);
    var b=parseInt(document.getElementById('num1').value);

    var c=a-b;
    document.getElementById("cal").innerHTML = c;
  
}


function mul(){
    var a=parseInt(document.getElementById('num').value);
    var b=parseInt(document.getElementById('num1').value);

    var c=a*b;
    document.getElementById("cal").innerHTML = c;
  
}


function div(){
    var a=parseInt(document.getElementById('num').value);
    var b=parseInt(document.getElementById('num1').value);

    var c=a/b;
    document.getElementById("cal").innerHTML = c;
  
}