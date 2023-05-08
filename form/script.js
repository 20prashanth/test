var inputTag = document.getElementsByTagName("input");
var selectTag = document.getElementsByTagName("select");
var radio = document.getElementsByName("gender");
inputTag[2].setAttribute('name','gender');
inputTag[3].setAttribute('name','gender');
var btn = document.getElementsByTagName("button");
console.log(btn.item(0));
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
for (var i = 0; i < inputTag.length; i++){
    inputTag[i].placeholder = " please enter this field";
}

btn[0].addEventListener('click', () => {
    for (var i = 0; i < inputTag.length; i++) {
        inputTag[i].value = " ";
        inputTag[i].placeholder = " please enter this field";
    }
    for (var j = 0; j < selectTag.length; j++) {
        selectTag[j].value = " ";
    }
    for (var k = 0; k < radio.length; k++)
    {
        radio[k].checked= false;
    }
    btn.item(1).disabled = false;
}); 
btn[1].addEventListener('click', () => {
    if(inputTag[0].value==""){
        btn.item(1).disabled = true;
    }
    else if(inputTag[1].value==""){
        btn.item(1).disabled = true;
    }
    else if(!(inputTag[2].checked||inputTag[3].checked)){
        btn.item(1).disabled = true;
    }
    else if(inputTag[4].value==""){
        btn.item(1).disabled = true;
    }
    else if(inputTag[5].value==""){
        btn.item(1).disabled = true;
    }
    else if(inputTag[6].value==""){
        btn.item(1).disabled = true;
    }
    else if(selectTag[0].value==""){
        btn.item(1).disabled = true;
    }
    else if(selectTag[1].value==""){
        btn.item(1).disabled = true;
    }
    else if(selectTag[2].value==""){
        btn.item(1).disabled = true;
    }
    else if(inputTag[6].value.length<10){
        alert("mobile number is incorrect")
    }
    else if(inputTag[4].value != mailformat){
    
        alert("email is incorrect");
    }
});


  

// btn[1].addEventListener('click', () => {
//     for(var i=0; i<inputTag.length; i++){
//         if(inputTag[i].value == ""){
//             inputTag[i].style.borderColor = "red";
//             inputTag[i].placeholder = "input";
//             btn.item(1).disabled = true;  
//         }
//     }
//     for(var j=0; j<selectTag.length; j++){
//         if(selectTag[i].value == ""){
//             selectTag[i].style.borderColor = "red";
//             selectTag[i].placeholder = "input";
//             btn.item(1).disabled = true;
//         }
    
//      if(inputTag[6].value.length<10){
//                alert("mobile number is incorrect")
//             }
//         if(inputTag[4].value != mailformat){
            
//                alert("email is incorrect");
//            }}
// });
// btn[1].addEventListener('click', () => {
//      if (inputTag[1].value == " " ) {
//         alert("some fields are empty");
//         btn[1].disabled=true;
//     }
//         else if (inputTag[1].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//        else if (inputTag[2].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//       else  if (inputTag[3].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//          else if (inputTag[4].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//         else if (inputTag[5].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//         else if (inputTag[6].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//         else if (selectTag[0].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//        else if (selectTag[1].value == " " ) {
//             alert("some fields are empty");
//             btn[1].disabled=true;
//         }
//        else if (selectTag[2].value == " " ) {
//             alert("some fields are empty");  
//             btn[1].disabled=true;
//         }
//     });