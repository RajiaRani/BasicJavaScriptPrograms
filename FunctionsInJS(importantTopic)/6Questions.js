//Qs.1 write a JS function that returns array larger than a number;

let array = [4, 6, 89, 21, 72, 56, 2, 0, 89];
let num = 6;
let getNumber = function(array, num) {
    for(let i=0; i<array.length ;i++) {
        if( array[i] > num) {
            console.log(array[i]);
        }
    }
}
getNumber(array,num);


//Qs2.Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh"

let str = "abcdabcdefggggh";
//function to get string with all unique characters
function getUnique(str) {
    let ans = " ";
    for(let i=0; i<str.length; i++) {

      let currChar = str[i];

      if(ans.indexOf(currChar) == -1){

   // if current character is not added, then add it in ans.

   //otherwise it is a duplicate.
        ans +=currChar;
      }
    }
    return ans;
}
console.log(getUnique(str));


//Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//Example: country = ["Australia","Germany","UnitedStatesofAmerica"] output: "UnitedStatesofAmerica".
 
let country = ["Australia", "Germany", "United States of America"];

  function longestName(country){

    //find the country length
    let n= country.length;

    //create ansIdx
    let ansIdx = 0;
    for(let i=0; i<n ;i++){
        //find the inside array length
        let innerLength = country[i].length;
        //find the ansIdx length
        let ansLength = country[ansIdx].length;

        if(innerLength > ansLength) {
            ansIdx = i;
        }

    }
    return country[ansIdx];
  }
  console.log(longestName(country));


  // Qs4.Write a JavaScript function to count the number of vowels in a String argument.
  let string ="helloeveryone";
  let n = string.length;
  function findVowels(string){

    let count=0;
      for (let i=0; i<n; i++)
      {
        if(string[i] == 'a' || string[i] == 'e' ||string[i] == 'i' ||string[i] == 'o' ||string[i] == 'u'  && 
        (string[i] == 'A' || string[i] == 'E' ||string[i] == 'I' ||string[i] == 'O' ||string[i] == 'U') )
        {
         count++;
        }
      }
      return count;
  }
  console.log(findVowels(string));

  //Qs5.Write a JavaScript function to generate a random number with ina range(start,end).
  let start = 100;
  let end = 200;
  function randomNumber(start,end){
    let diff = end - start ;
    let formula = Math.floor(Math.random() *diff)+start;
    return formula;
  }
  console.log(randomNumber(start,end));