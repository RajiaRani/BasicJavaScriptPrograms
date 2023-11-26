/*let para = document.querySelector("p");

para.addEventListener("click", function(){

     console.log("clicked");
});

let btns = document.querySelectorAll("button");

for(let btn of btns){
  btn.addEventListener("click",function(){
    this.style.backgroundColor ="yellow";
  });
  console.dir("btn");
};

let btn1 = document.querySelector("button");
btn1.addEventListener("click", function(){
  console.dir(this.innerText);
  this.style.backgroundColor ="yellow";
});
*/

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let para = document.querySelector("p");
let btns= document.querySelectorAll("button");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor ="yellow";
};

h1.addEventListener("click", changeColor);
h2.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);

for(let btn of btns){
    btn.addEventListener("click", changeColor);
};




