//filter----
//let newArr = arr.filter(some function definition or name)
//filter gives us the true or false value.


let arr = [ 2,3,2,2,2,2,2,];
let newArr = arr.filter ((ele) => {
    //odd number ka array output mein ayega
    return (ele%2 == 1);
});
console.log(newArr);


//print the Even number of array
let arr1 = [ 2, 5, 7, 8, 23, 11, 10, 78, 67, 56];
let newArr1 = arr1.filter ((num) => {
    return (num%2 == 0);
});
console.log(newArr1);


//print larger than 100 numbers
let arr2 = [3,67,89,23,11,69,30,20,100,199,890,220];
let newArr2 = arr2.filter((int) => {
    return (int > 100);
});
console.log(newArr2);


let arr3 = [2,4,16,8,9,10,32,46,48,56];
let newArr3 = arr3.filter((int) => {
    return 2**2;
});
console.log(newArr3);