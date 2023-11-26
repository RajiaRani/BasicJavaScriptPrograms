//----Every-----
//returns true if every elements of array gives true for some function.Else return false.
//arr.every(some function definition or name).
 
let arr = [1,2,3,4];
let newArr= arr.every((el)=> {
    return (el%2 == 0);
});
console.log(newArr);

let arr1 = [5,3,7];
let newArr1= arr1.every((el)=> {
    return (el%2 == 1);
});
console.log(newArr1);

//Qs.check if all numbers in our array are multiples of 10 or not .
let array = [10,20,30,40,50,60,100,200];
let newArray = array.every((ele) =>  ele%10 == 0 );
console.log(newArray);