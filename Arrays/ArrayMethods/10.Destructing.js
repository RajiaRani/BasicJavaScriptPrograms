//--Destructuring ---
//Storing values of array into multiple variables.


let names = ["tony", "neha", "akesh", "vajay", "narinder"];
let winner = names[0];
let runnerup = names[1];
let secondrunnerup = names[2];
console.log(winner, runnerup);
//Note- to minimize the above codse by using destructuring method

let Names = ["tony", "neha", "akesh", "vajay", "narinder"];
let [ Winner, Runnerup , ...others] = Names;
console.log(`First winner is :` ,Winner, ` , Runnerup is :`,  Runnerup, others);