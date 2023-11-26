//Question: write a JS program to delete all occurrences of elements 'num' in a given array.
//Example- if arr = [1,2,3,4,5,6,3,4,2,9,7] & num = 2 
//Result sould be arr = [1,3,4,5,6,3,4,9,7]

let arr = [1,2,3,4,5,6,3,4,2,9,7];
let num = 2;
for(let i=0;i<arr.length;i++){
    if( num == arr[i]){
        arr.splice(i,1);
    }
}
console.log(arr);
