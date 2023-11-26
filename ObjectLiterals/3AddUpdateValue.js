const student ={
    name : "RajiaRani",
    age : 24,
    marks: 67.90,
    grade : 'B',
}
console.log(student);

//update the grade 
student.grade = '+B';

//update the name 
student.name ="ChenchuReddy";

//add new property
student.gender = 'male';

//add new property
student.city="Jalandhar";

//add the array also
student.mark = [78,90,89];

student.subjects =["Physcis", "Chemistry" , "Maths"];

//delete the object also
delete student.grade;

//print the student
console.log(student);
