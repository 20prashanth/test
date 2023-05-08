//Get count of vowels and consonents from given string

function vowels_cons(orginal){
    let j,c                       //declaration of variables
let count =0; a =0
for(j=0; j<=s.length-1;j++){
    c=s[j]
    if( c=="a" || c=="e" || c=="i" ||c=="o"||c=="u" ||c=="A" ||c=="E" ||c=="I" ||c=="O" ||c=="U"){ // condition to check the each char in string is vowel or consonant
        count++       //if char is vowel then it will increase the count value  by 1
    }
    else{
        a++;          //if char is consonant it increase a value by 1
    }
}
console.log("number of vowels=" +count); // it will print number  of vowels
console.log("number of constants ="+ a);  // it will print number  of constants
}

let s="prashanth"   //declaring the string
console.log("the string is:");
console.log(s);

vowels_cons(s);  
 