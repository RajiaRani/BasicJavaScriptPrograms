
//create the array
let students = ["Rajia","Rohan","Roma","Rohit","Ram"];

//push method-Add to end
students.push("Reetu");
console.log(students);
console.log("Length of the array is : ",`${students.length}`);

//Unshift-Add to start
students.unshift("Laddi");
console.log(students);
console.log("Length of the array is : ",students.length);

//Pop method-Remove from end
students.pop();
console.log(students)
console.log("Length of the array is : ",`${students.length}`);

//shift-Remove from start
students.shift();
console.log(students)
console.log("Length of the array is : ",`${students.length}`);