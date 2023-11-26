//write a JS program to find the no of digits in a number. Example: if number = 287152 , count = 6 .
 
let number = 1234567 ;
let count = 0;

let copy = number;

while(copy>0)
{
    count++;
    // Math.floor() function is used to round a number down to the nearest integer. 
    copy = Math.floor(copy/10);
}
console.log(count);