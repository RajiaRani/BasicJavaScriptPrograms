//call stack
//Ex.1
/*
function sayHello(){
    console.log("inside hello function");
    console.log("hello");
}

function demo(){
    console.log("calling the sayhello function");
    sayHello();
}
console.log("calling the demo function");
demo();
console.log("bye bye");
*/


//Ex.2

function one(){
  return 1;
}
function two(){
 return one()+one();
  
}
function three(){
   let ans= two()+one();
    console.log(ans);
}
three();

//Ex.3
function add(){
  return 6;
}
function finalAdd(){
let ans = add()+add();
console.log(ans);
}
finalAdd();


//---Breakpoints----
//using to check the single links from the whole code
//for debugging
//or else check the error
