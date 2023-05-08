
console.log(day); 
function currentTime(){
let d = new Date();
let dd=d.getDate();
let mn=d.getMonth();
let yy=d.getFullYear();
let hh=d.getHours();
let mm=d.getMinutes();
let ss=d.getSeconds();
let day=d.getDay();
let session="AM";
switch(day){
    case 0:
        day="sunday";
        break;
    case 1:
    day= "mondayt"    ;
    break;
    case 2:
        day= "tuesday";
        break;
    case 3:
        day= "wednesday"  ;
        break;
    case 4:
        day= "thursday" ;
        break;
    case 5:
        day= "friday"  ;
        break;
    case 6:
        day= "saturday";
        break;            
}


if(hh==0){
    hh=12;
}

if(hh>12){
    hh=hh-12;
    session="PM";
}

let time=hh  +":" +mm +":"+ ss + " "+session;
let date =dd +"-" +mn +"-"+ yy;

console.log(time);
 document.getElementById("clock").innerHTML=time;
document.getElementById("date").innerHTML=date;
document.getElementById("day").innerHTML=day;
 let t=setTimeout(function(){currentTime()}, 1000);

}
currentTime();