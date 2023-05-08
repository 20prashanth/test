let x;
const myObj={
   name: "jp",
   age: 22,
   cars:[
    {name:"ford", models:["fiesta", "focus", " mustang"]},
    {name:"bmw", models:["320", "x3", "x5"]},
    {name:"flat", models:["500", "panda"]}
   ]
};

for(let i in myObj.cars){
    x +=myObj.cars[i].name + "\n";
    for(let j in myObj.cars[i].models){
         x +=myObj.cars[i].models[j] + "\n";
    }
}

console.log(x);

const person={
    fisrtName:"prashanth",
    lastName:"jandipally",
    age:22,
    language:"telugu"
    
};
console.log(person.fisrtName +" : "+ person.lastName); 
