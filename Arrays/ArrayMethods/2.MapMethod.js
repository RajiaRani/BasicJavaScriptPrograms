// let newArr = arr.map(some function definition or name).

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.map((el) => {
    return el*2; 
});
console.log(newArr);





//Ex.2
const students = [ {
    name :"rajia",
    marks:78.9,
    },

     {
      name :"chenchu",
      marks:89.9,
     },

     {
      name :"shiva",
      marks:90,
     }];

//create new array
let gpa = students.map((elt) => {
    return (elt.marks/10);
});
console.log(students);
console.log(gpa);

