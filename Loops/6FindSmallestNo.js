//find the smallest number in an array with only positive numbers.
let arr = [23, 67, 0 , 2 , 78, 8, 15, 35, 40, 44, 10];

// Initialize mini_number to the maximum possible positive value
let mini_number = Number.MAX_SAFE_INTEGER;

for(let i=0;i<arr.length;i++) {
     if(arr[i]<mini_number)
     {
        mini_number=arr[i];
     }
}
console.log(`Minimum number is: ${mini_number}`);