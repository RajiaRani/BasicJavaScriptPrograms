//---Spread--- 
//Expands an iterable(arrays etc) into multiple values.
// function funcName (...arr) { //do something }.

//Ex.1
let arr = [1, 2, 3, 4, 5, 6, 7, -1, 0, -8, -11, 0.9, 90];
//print the array as it.
console.log(`array is :`, arr);
//print the individual numbers
console.log(`Individual numbers are:`,...arr);


//Ex.2
let str = "HelloEveryone";
console.log(...str);



//Ex.3
let arr1 =[1,2,3,4,5,7,8,9,11];
let copyArr = [...arr1];
console.log(`New copy array is :` , copyArr);
//we can do the new changes in the newcopy array
copyArr.push(12);
copyArr.unshift(0);
console.log(`After the changes : `, copyArr);
//after doing all methods arr remain same
console.log(`original array is :` , arr1);


//Ex.4
let string = "HiiRajiaRani";
let char =[...string];
console.log(char);


//Ex.5
let odd =[ 3, 5, 7, 11, 13, 17, 19, 23];
let even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let finalArr = [...even , ...odd];
console.log(finalArr);




//Spread with object literals
const data = {

    email: "ironman@gmail.com",
    password: "abcd123",
};
//also add the new things
const copyData ={...data, id:1234, country:"India"};
console.log(copyData);


let Arr = [1,2,3,4,5];//value
let obj1 = {...Arr}//key->index = value
console.log(obj1);

let obj2 = {..."hello"};
console.log(obj2);