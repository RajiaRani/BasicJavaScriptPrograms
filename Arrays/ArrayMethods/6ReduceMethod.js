//----Reduce--
//Reduces the array to a single value
// arr.reduce(reducer function with 2  variables for (accumulator, element)).

let num= [ 1,2,3,4,];
let newNum = num.reduce((res,ele) =>  {
    console.log(res);
    return res + ele;
} );
console.log(newNum);

let arr = [ 1, 2, 3, 4, 5, 6, 7];
let newarr = arr.reduce((multi,ele) => multi * ele );
console.log(newarr);


//find the max value
let array = [  2,67,3,77,90,23,44,6,7,8,9,111,22];
let newArray = array.reduce((maxValue, ele) => {
    if(maxValue < ele)
    {
        return ele ;
    }
    else {
        return maxValue ;
    }
});
console.log(newArray);


//to find minimum value
let arr1 = [1, 3, 7, 8, 11, 7, 0, -0.8, -0.5, 1, 0.1];
let newArr1 = arr1.reduce((miniValue , ele) => {
    if(miniValue < ele){
        return miniValue;
    }else {
        return ele ;
    }
});
console.log(newArr1);


function getMini(anyArr){
    let miniValue = anyArr.reduce((mini,ele) => {
        if(mini < ele){
            return mini;
        } else {
            return ele;
        }
    });
    return miniValue;
}
let nums =[1,2,3,4,5,0];
console.log(getMini(nums));
