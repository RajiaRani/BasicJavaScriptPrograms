//Qs.1
function printName(name) {
    console.log(name);
}
printName("rajia");
printName("chenchu");
printName("shiva");


//Qs.2
//we can also gives the multiple arguments
function printDetails(name , age) {
    console.log(`${name} age is ${age}`);
}
printDetails("rajia", 26);
printDetails("chenchu", 24);
printDetails("shiva");
//NOTE - if we want to miss any argument input , we should follow the order.

//Qs.3 
function sum(num1, num2) {
    console.log(`Sum of two numbers is:`,num1+num2);
}
sum(4,6);


//Qs.4
function sub(num1, num2) {
    console.log(`Subtract of two numbers is:`,num1-num2);
}
sub(4,6);


//Qs.5
function multi(num1, num2) {
    console.log(`Multiplication of two numbers is:`,num1 * num2);
}
multi(4,6);


//Qs.6
function div(num1, num2) {
    console.log(`division of two numbers is:`,num1/num2);
}
div(4,6);


//Qs.7
function Mod(num1, num2) {
    console.log(`Modulo of two numbers is:`,num1%num2);
}
Mod(4,6);


//Qs.8
function pow(num1, num2) {
    console.log(`power of two numbers is:`,num1**num2);
}
pow(4,6);


//Qs.9 Create a function that gives us the average of 3 numbers.
function average(num1, num2, num3){
    let avg = (num1+num2+num3)/3;
    console.log(`Average of three numbers: `,avg);
}
average(2,2,2);
average(2,4,6);


//Qs.10 create a function that prints the multiplication table of a number.
function multiTable(num) {
 for(let i=num; i<=num*10; i+=num){
     console.log(i);
 }
}
multiTable(99);

