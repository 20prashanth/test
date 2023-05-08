
var input = document.getElementsByTagName("input");
var select = document.getElementsByTagName("select");

const arr = [input[0], input[1], input[2], input[3], input[4], input[5], input[6], select[0], select[1], select[2]];

select[0].setAttribute("id", "schoolList");
select[1].setAttribute("id", "departmentList");
select[2].setAttribute("id", "courseList");

input[7].setAttribute("id", "reset");
input[4].setAttribute("class", "email");

input[7].addEventListener("click", load);
function load() {
    location.reload();

}

                                                                                                  

