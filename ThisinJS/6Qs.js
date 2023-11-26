//Qs1.Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arr = [ 1,2, 3, 4, 6, 7, 8];
const arrayAverage = (arr) => {
  let sum = 0;
  for(let i=0;i<arr.length;i++) {
    sum+=arr[i];
  }
  let avg = (sum)/arr.length;
  return avg;
}
console.log(arrayAverage(arr));

//Qs2.Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
const isEven = (n) => {
    if(n%2 == 0)
    {
        return "even";
    }
    else{
        return "not even";
    }
}
console.log(isEven(2));