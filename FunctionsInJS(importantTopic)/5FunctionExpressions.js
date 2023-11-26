//let name = "rajia";
//variable name == function
let Name = function(name){
    return name;
}
console.log(Name("rajia"));


let hello = function(){
    console.log("Hello");
}
hello();

//update the function value
hello = function(){
    console.log("Namaste");
}
hello();

//Qs.
const studentsInfo = function(name,marks,result){
    console.log(name,marks,result);
}
studentsInfo("Rajia" ,"78.90%" ,"Pass");
studentsInfo("Chenchu" ,"90%" ,"Pass");
studentsInfo("Shiva" ,"80%" ,"Pass");


//Higher Order Functions
//1.Takes one or multiple functions as arguments.
//2.returns a function

function multipleGreet (func, count) { //higher order function
      for(let i=1; i<=count; i++) {
        func();
      }
}

let greet = function() {
    console.log("Hello , Everyone");
}
//call the multiplegreet
multipleGreet(greet,2);


//Ex.
function likesCount(func,count){
    for(let i=0;i<count;i++){
        func();
    }
}

let likes = function(){
    console.log("likes");
}
likesCount(likes,23);


//Ex.
function OddEvenTest(request) {
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
;
    } else if( request == "even") {
         return function(n){
            console.log( n% 2 == 0);
         }

    }
    else {
        console.log("wrong request");
    }
}
let request = "odd";



//Methods

const calculator = {
    num:12,

    add : function (x, y){
        return (x + y);
    },
    sub : function (x, y){
        return (x - y);
    },
    div :function (x, y){
        return (x/y);
    }

};
console.log(calculator.num);
console.log(calculator.add(1,2));
console.log(calculator.div(1,2));
console.log(calculator.sub(1,2));


const miniCalculator = {
    add

};