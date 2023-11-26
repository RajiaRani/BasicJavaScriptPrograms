
/*
let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log(event);
    console.log("Button clicked");
});
*/

/*
let inp = document.querySelector("#inp");

inp.addEventListener("keydown",function(){
    console.log("key was pressed");
});
inp.addEventListener("keyup",function(event){
    console.log("key = ", event.key);
    console.log("code= ",event.code);
    console.log("key was released.");
    
});
*/
/*
let form = document.querySelector("form");
form.addEventListener("submit", function(event)
{
    event.preventDefault();
    //alert("submitted!");
    console.dir(inp);
    console.log(inp.value);
    console.log("form submitted!!.");
});
*/

//let inp = document.querySelector("#inp");
//let pas = document.querySelector("#pass");

/*
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);

 let user = this.elements[0];
 let pass = this.elements[1];
 console.log(user.value);
 console.log(pass.value);
 alert(`Hi, ${user.value}, your password is set to ${pass.value}.`);
    //console.log(inp.value);
    //console.log(pas.value);

    //alert(`Hi, ${inp.value}, ypur password is set to ${pas.value}.`);

    
});
*/

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);
});

let user = document.querySelector("#inp");
user.addEventListener("change", function() {
    console.log("changed event.");
    console.log("final value =", this.value);
});


user.addEventListener("input", function() {
    console.log("input event.");
    console.log("final value =", this.value);
});


let txt = document.querySelector("#txt");
let para = document.querySelector("p");

txt.addEventListener("input" , function(){
    console.log(txt.value);
    para.innerText=txt.value;
});


