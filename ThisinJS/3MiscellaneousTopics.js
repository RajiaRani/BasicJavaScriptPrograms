//--Arrow Functions--
// const funcName = (arg1,arg2,...) => { func definition }


//Ex.1
 const getSum = (x, y) => {
    console.log(x+y);
 };
 console.log(getSum(1,1));


//Ex.2
 const cube = (n) => {
    console.log( n*n*n);
 };
 console.log(cube(2));


 //Ex.3
 const power= (a, b) =>{
    console.log(a**b);
 };
 console.log(power(2,2));


 //Ex.4
 const hello = () => {
    console.log("hello world");
 };
 console.log(hello());



 //--Implicit return--
 //means only single value return honi ho

 const mul = ( a,b) => a * b;
 console.log(mul(2,2));