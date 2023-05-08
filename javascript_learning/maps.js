const students=new Map(); 
students.set("jp", 533);
students.set("venky", 523);
students.set("ramu", 509);
console.log(students.get("jp"));
console.log(students.size);
let text= "";
for(const x of students.entries()){
    text += x + "\n";
}
console.log(text);