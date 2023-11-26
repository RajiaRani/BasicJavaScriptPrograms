 //write function name
//Example.1
 function hello() {
    //write what you want to perform
    console.log("Hello, my name is Bharti.");
 }

 //calling the function
 hello();
 //you can call the function multiple times
 /*hello();
 hello();
 hello();*/

 //Example.2
 function printName() {
    console.log("Rajia");
 }
 printName();


 //Example.3 
 //we can also use the loops inside the functions
 function print1to5() {
    for(let i=0;i<=5;i++) {
        console.log(i);
    }
 }
 print1to5();


 //Example.4
 //we can also use the if and else statement
 function Attendence(){
     let present = 'false';
     if(present == 'false'){
        console.log("student is absent.");
     } else {
        console.log("student is present.");
     }
 }
 Attendence();

 //Example.5
 function isAdult(){
    let age = 18;
    if(age >= 18){
        console.log("adult");
    } else{
        console.log("not adult");
    }
 }
 isAdult();


 //Example.6
 function finalResult() {
    let marks = 50;
    if( marks >= 60) {
        console.log("Congrats!! your pass.");
    } else {
        console.log("Sorry, you are not pass.");
    }
 }
 finalResult();

 //Example.7
 function printPoem() {
    console.log("Twinkle Twinkle, little star.");
    console.log("how,i wonder what you are.");
    console.log("up above look at the sky.");
 }
 printPoem();

 //question: Create a function to roll a dice & always display the value of the dice(1 to 6).
 function rollDice() {
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);
 }
 rollDice();