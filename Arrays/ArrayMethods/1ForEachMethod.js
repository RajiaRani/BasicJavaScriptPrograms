//For each method
//formula ---- arrName.forEach(some function definition  or name or arrow function )

//1.Method
let arr = [1, 3, 7, 8, 9 , 10, 11];
let printArray = function(element) {
    console.log(element);
}
arr.forEach(printArray);


//2.Method
arr.forEach (function (element) {
    console.log(element);
});

//3.Method(arrow function)
arr.forEach((element) => {
    console.log(element);
});


//Qs.4
const array = [ {
          name :"rajia",
          marks:78.9,
          },

           {
            name :"chenchu",
            marks:89.9,
           },

           {
            name :"shiva",
            marks:90,
           }];

array.forEach((ele) => {
  //console.log(array);
  console.log(ele.name);
});