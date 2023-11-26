//This-keyword
//"This" keyword refers to an object that is executing the current piece of code.

//crete the object called student
const student = {
    name :"simran",
    age : 25,
    stream:"non-medical",
    subjects: ["engllish", "physics", "chemistry", "math"],
    english:78,
    math:90,
    physics:68,
    chemistry:87,

    // method
    getAvg(){
        console.log(this);
        let avg=(this.english + this.math +  this.physics + this.chemistry)/4;
        console.log(` ${this.name} got average marks = ${avg}`);
    }

}

console.log(student.getAvg());