var inputTag = document.getElementsByTagName("input");
var selectTag = document.getElementById("select");
var summary = document.getElementsByTagName("textarea");
var button = document.getElementsByTagName("button");
var radio = document.getElementsByName("education");
var edu;
var result;
var required;
inputTag[5].setAttribute('name', 'education');
inputTag[6].setAttribute('name', 'education');
const arr = [inputTag[0], inputTag[1], inputTag[2], inputTag[3], inputTag[4], inputTag[5], inputTag[6], inputTag[7], summary[0], selectTag[0],];

// button.addEventListener("click", validate());
// const arr = [];

function checkValue() {
    let countError = 0;
    arr.forEach((element) => {
        if (element == inputTag[5] || element == inputTag[6]) {
            if (document.getElementsByTagName("input[name='eduction']:checked") == null) {
                countError++
            }
        } else if (element.value == "") {
            countError++;
        }
        console.log(countError)
    })

    if (countError === 0) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}
function emailValidation() {
    var filter = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!inputTag[2].value.match(filter)) {
      alert("email is incorrect")
    }
}


function mobileValidation() {
    var filter = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
    if (!inputTag[1].value.match(filter)) {
        alert("mobile number is incorrect")
    }
}


function blur() {
    arr.forEach((element) => {
        element.addEventListener('blur', checkValue)
    })
}


function nameValidation() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!inputTag[0].value.match(regName)) {
        button.disabled = true
    }
}

// checkbox validation
function radi() {
    var ug = document.getElementById("ug");
    var pg = document.getElementById("pg");

    if (!ug.checked && !pg.checked) {
        edu = "";
    } else if (ug.checked) {
        edu = ug.value;
    } else if (pg.checked) {
        edu = pg.value;
    };
}

function checkBox() {
    var telugu = document.getElementById("telugu");
    // var hindi = document.getElementById("hindi");
    var english = document.getElementById("english");

    if (!telugu.checked && !english.checked) {
        result = "";
    } else if (telugu.checked && !english.checked) {
        result = "Telugu";
    } else if (!telugu.checked && english.checked) {
        result = "English";
    } else {
        result = "Telugu , English";
    };
}
// function valid(){
//     checkBox();
//     radi();
//     blur();
//     emailValidation();
//     mobileValidation();
//     nameValidation();
//     checkValue();
// }

function mov() {
    required = selectTag.value;
}
document.querySelector(".submitbtn").addEventListener("click", () => {
            blur();
            emailValidation();
            mobileValidation();
            nameValidation();
            checkValue();
    for (var i = 0; i < inputTag.length; i++) {
        if (inputTag[0].value == "" 
        || inputTag[1].value == "" 
        || inputTag[2].value == "" 
        || inputTag[7].value == "" 
        ||selectTag[0].value == " " 
        || radio[i].value == "" 
        || summary[0].value == "") {
            
            document.querySelector(".submitbtn").removeAttribute('data-toggle', 'modal');
            document.querySelector(".submitbtn").removeAttribute('data-target', '#myModal');
        }
        else {
            document.querySelector(".submitbtn").setAttribute('data-toggle', 'modal');
            document.querySelector(".submitbtn").setAttribute('data-target', '#myModal');
            checkBox();
            radi();
           
            mov();
            document.querySelector(".dname").innerHTML = inputTag[0].value;
            document.querySelector(".number").innerHTML = inputTag[1].value;
            document.querySelector(".email").innerHTML = inputTag[2].value;
            document.querySelector(".summary").innerHTML = summary[0].value;
            document.querySelector(".dob").innerHTML = inputTag[7].value;
            document.querySelector(".movie").innerHTML = selectTag.value;
            document.querySelector(".checkbox").innerHTML = result;
            document.querySelector(".education").innerHTML = edu;
        }
    }

})
