var email = document.getElementById("Email");
var PWd = document.getElementById("password");
var input = document.querySelectorAll('input');
function setcookie() {
    // if(document.Email.value== " "|| document.myform.password.vlue==" "){
    //     alert("enter the values in empty fields");
    //     return;
    // }
    // cookievalue = escape(document.myform.Email.value)+ ";";
    // cookievalue1 = escape(document.myform.password.value)+ ";";
    document.cookie = `${encodeURIComponent(input[0].name)} = ${input[0].value};`
    document.cookie = `${encodeURIComponent(input[1].name)} = ${input[1].value};`
    console.log(document.cookie);
    input[0].value = "";
    input[1].value = "";
}

function deletecookie() {
    document.cookie = `${encodeURIComponent(input[0].name)} = ${input[0].value}; max-age = -99`
    document.cookie = `${encodeURIComponent(input[1].name)} = ${input[1].value}; max-age = -99`
    console.log(document.cookie);
    input[0].value = "";
    input[1].value = "";
}
let Cookies = document.cookie.split(';').map((cookie) => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
function editcookie() {
    // document.cookie = tab.push(email.innerHTML);
    // document.cookie =  tab.push(password.innerHTML);
    for(var i = 0; i<input.length;i++){
        input[i].value = Cookies[ input[i].name];
    }

}