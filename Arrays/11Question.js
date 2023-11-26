//Qs 1. Write a JavaScript program to getthe first n elements of an array.[n can be any positive number].
//Forexample:for array[7,9,0,-2] and n=3 Print,[7,9,0]
let ansArr = [ 7,9,0,-2];
let n = 3;
let ans = ansArr.slice(0,n);
console.log(ans);