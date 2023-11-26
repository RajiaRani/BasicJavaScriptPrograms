//---Event Listener---
//formula :: element.addEventListener(event, callback);
// we can use multiple event listener for the single object

let btns = document.querySelectorAll('button');
for(let btn of btns)
{
    //btn.addEventListener("click", clicked);
    //btn.addEventListener("click", creatAlert);
    btn.addEventListener("contextmenu", contextMenu);
    console.dir(btn);
}

/*
function clicked() {
    alert("clicked button!");
    //console.log("clicked the button.");
};
 function creatAlert() {
    alert("submitedd!!");
 }
*/

function contextMenu (){
    alert("comster contactMenu");
}