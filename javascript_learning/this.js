const student={
    name:  "prashanth",
    id: 533,
    branch:"cse",
    stu1 : function(){
        return this.name + " " + this.id;
    }

};
console.log(student.stu1());

//arrow function
var fun = (a,b) => a*b;
console.log(fun(3,2));

//class

class bike{
    constructor (name,year){
        this.name=name;
        this.year=year;
    }
}

const myBike=new bike("pulsar",2018);

console.log(myBike.name + " " + myBike.year );

//json

const text= '{"students" :['+
'{"firstName":"prashanth", "lastName":"j"},'+
'{"firstName":"venky", "lastName":"g"}]}';
const obj=JSON.parse(text);
console.log(obj.students[1].firstName + " " + obj.students[1].lastName);


//array filter

var num=[12,7,9,13,99,55];
var n=num.filter(myFun);
 var s=num.reduce(func);
console.log(n);
  console.log(s);
 function myFun(value){
    return  value>50
 }

function func(total,value){
   return total + value;
}
