//setInterval(function, timeout)
/*
console.log("Hello");
setInterval( () => {
    console.log("Mr.Vijay Reddy");
}, 2000);
console.log("yours welcome");
console.log(setInterval);

//to stop this function we used id
let id = setInterval( () => {
    console.log("India");
}, 2000);
console.log(id);

let id2 = setInterval( () => {
    console.log("United States");
}, 1000);

console.log(id2);
*/
const student = {
    name :"raman",
    marks : 87,
    prop:this,
    getName: function() {
        console.log(this);//global scope
        return (this.name);
    },

    //arrow function
    getMarks : () => {
    console.log(this);//parent scope -> window object
    return this.marks;
 }

}
console.log(student.getName());
/*
student.getName();

VM398:6 {name: 'raman', marks: 87, prop: Window, getName: ƒ}getName: ƒ }

'raman' */