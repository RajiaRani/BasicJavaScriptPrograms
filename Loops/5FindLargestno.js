//find the largest number in an array with only positive numbers.
let arr = [23, 67, 1, 2 , 78, 8, 15, 35, 40, 44, 10];
let max_number =0;
for(let i=0;i<arr.length;i++) {
     if(arr[i]>max_number)
     {
        max_number = arr[i];
     }
}
console.log(`Maximum number is: ${max_number}`);