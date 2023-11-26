//--Rest---
//Allows a function to take an indefinite number of arguments and bundle them in an array.

function sum (...arguments) {
    for(let i=0;i<arguments.length; i++)
    {
        console.log(`you gave us :`, arguments[i]);
    }
};
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
//this sum dunction- collects all the arguments values and convert it into  a single arugumnet collection.



//Ex.2
function min () {
    console.log(arguments);
    console.log(arguments.length);// you will not saw any error
}
console.log(min(1,2,3,4));


//Ex.3
function Sum(...arguments) {
    return arguments.reduce((sum,ele) => sum+ele);
}
console.log( `Sum is :`  , Sum(2,5));

//Ex.4
function findMin(...args) {
    return args.reduce((min,ele) => {
            if(min < ele){
                return min;
            } else {
                return ele;
            }
        });
}
console.log( `The minimum vale is : `,findMin( 0, -1, 1,2,3,4,5));