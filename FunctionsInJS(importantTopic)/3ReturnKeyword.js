//Return keyword is used to return some value from the function
function sum(a,b){
    console.log("hello");
    console.log("hello");
    console.log("hello");
    return a+b;
    //after return statement koi bhi code excude nhi hoga
    
}
//now you did not get any output because you return the value not print the values
//sum(1,2);
//store in variable
let s = sum(4,7);
console.log(s);

//find the sum of three variables
//console.log(sum(sum(2,3),9));


//Qs.1 
function isAdult(age) {
    if(age>=18){
        return "adult";
    } else {
        return "not adult";
    }
   
}

let ans = isAdult(9);
console.log(ans);

//Qs.2 create a function that returns the sum of integers from 1 to n.
function getSum(n) {
    let sum =0;
    for(let i=1;i<=n;i++)
    {
      sum += i;
    }
    return sum;
}

console.log(getSum(5));  

//Qs.3 create a function that returns the concatenation of all strings in an array.
let str = ["hii" , "hello" ,"bye", "!"];
function concat(str){
    let result=" ";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}
console.log(concat(str));