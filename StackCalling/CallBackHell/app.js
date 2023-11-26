
h1 = document.querySelector("h1");
/*
setTimeout(() => {
    h1.style.color = "red";
}, 1000);

setTimeout( () =>{
    h1.style.color ="blue";
},2000);

setTimeout(() => {
    h1.style.color ="green";
},3000);

setTimeout(() => {
    h1.style.color ="purple";
},4000);

setTimeout(() => {
    h1.style.color ="yellow";
},5000);

NOTE----This is not method to print the colors , so we are using the new format.


//EX.2
function changeColor(color, delay){
    setTimeout(()=>{
    h1.style.color = color;
    },delay);
};

changeColor("red", 1000);
changeColor("green", 2000);
changeColor("blue", 3000);
//--But this is also not a good way to create the things.
*/


//to show the dependency
function changeColor(color,delay,nextColorChange){
    setTimeout(()=> {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
};

changeColor("red",1000, ()=>{
  changeColor("orange",1000, ()=>{
    changeColor("green",1000, () =>{
        changeColor("blue",1000, ()=>{
            changeColor("pink",1000,()=>{
                changeColor("yellow",1000);
            });
        });
    });
  });
});