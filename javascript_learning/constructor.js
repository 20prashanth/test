function stud(name,gender,id){
    this.name=name;
    this.gender=gender;
    this.id=id;
}

stud.prototype.age=30;

var stu1=new stud('jp','m',533);
console.log(stu1.age);
console.log(stu1);     