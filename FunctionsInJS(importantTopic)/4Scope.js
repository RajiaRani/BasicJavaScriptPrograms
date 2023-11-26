

//functionscope means-you cant call the variables outside the function. 
//OR variables defined inside a function are not accessible (visible) from outside the function.
function calSum( a, b) {

    let sum = a+b;//function scope

}
//when you call the sum outside the function it will show error
//console.log(calSum(sum(1,2)));


//Ex.1
function findSum( a,b){
    let sum = a+b; //function scope
    console.log(sum);
}
findSum(1,2);

//Ex.2 

//function can use global scope variable to anywhere

let sub = 54; //Global Scope
function findSub(a, b){
    let sub = a - b;//Function Scope
    console.log(sub);
}
findSub(8,4);
console.log(sub);
//--NOTE -- always remeber function scope is More specific than global scope.


//Block Scope
//variables declcared inside a {} block cant be accessed from outside the block.


for(let i=1;i<=4;i++){
    //used the block scope inside
    console.log(i);
}
//console.log(i);//showing error



//Lexical Scope
function outerFunc() {
    let x = 15;
    let y = 6;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}
outerFunc();

//hoisting
function outerFunc() {

    function innerFunc() {
        console.log(x);
        console.log(y);
    }

    let x = 15;
    let y = 6;

    innerFunc();
}
outerFunc();


//Qs.
let greet = "hello";//Global scope
function outerGreet (){

    let greet = "namaste";//function scope
    console.log(greet); //print the outerGreet
    function innerGreet(){

        console.log(greet);//function scope
    }
    innerGreet();//calling the innergreet
}
console.log(greet);
outerGreet();