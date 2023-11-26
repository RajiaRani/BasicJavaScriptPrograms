//--Some--
//return true if "some elements of array give true " for some function. Else returns false.

let arr = [1,2,3,4];
let newArr= arr.some((el)=> {
    return (el%2 == 0);
});
console.log(newArr);




let arr1 = [5,3,7];
let newArr1= arr1.some((el)=> {
    return (el%2 == 1);
});
console.log(newArr1);