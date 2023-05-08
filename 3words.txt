// pic only 3 letter word from the given input sentence
function three_letter_string(original) {
    var i = 0, j;
    var count=0;
    var start;
    var str = original.split("");//spliting the string
    for(i=0;i<original.length;i++){
    if (original[i]!=" "){
    count++;
    
    if(count==3){                //checking the condition for count =3
    if(original[i+1]==" "){
    console.log(original.substring(start,i+1)) //if count=3 then it will print the word
    }
    // else if((i+1)==original.length) {
    // console.log(original.substring(start,i+1))
    // }
    }
    }
    else{
    start=i+1;
    count=0;
    }
    }
    }
    
    var string = "hi how are you four";
    console.log(string);
    
    
    three_letter_string(string); 