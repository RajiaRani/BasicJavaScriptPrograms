let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul =document.querySelector("ul");
 
btn.addEventListener("click", function(){
 //create item to add 
 let item = document.createElement("li");
 item.innerText = inp.value;
  ul.appendChild(item);
  //console.log(item);
  inp.value = " ";

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");
   item.appendChild(delbtn);
});

//this delete method is not applied on new added button
/*
let delBtns = document.querySelectorAll(".delete");
for(let btns of delBtns){
    btns.addEventListener("click", function(){
     let parent = this.parentElement;
     parent.remove();
     console.log("deleted");
    });
}
*/
ul.addEventListener("click", function(event){
    //batta hai kon sa button click kiya hai
    //console.log(event.target);
    //console.dir(event.target.nodeName);
  if(event.target.nodeName == "BUTTON"){
    let listitem= event.target.parentElement;
    listitem.remove();
    console.log("deleted");
  }
    //console.log("clicked");
});