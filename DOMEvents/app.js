//acess the button
//let btn = document.querySelector("button");
//console.dir(btn);

//set the onclick property
//btn.onclick = function() {
    //console.log("button was clicked!");
   // alert("Button was clicked!!");
//}

/*function getName() {
    alert("submitted name successfully.")
}

btn.onclick = getName;*/


//lets suppose we have multiple buttons

/*
let btns = document.querySelectorAll("button");

//apply loops
for(let btn of btns) {
     
    btn.addEventListener("onclick", btnclicked);

    btn.addEventListener("mouseenter", function () {
        console.log("you entered a button");
    });
    console.dir(btn);
}
function btnclicked(){
    alert("button was clicked.");
    //console.log("button was clicked!");
}

*/


let btns = document.querySelectorAll("button");

for (let btn of btns) {
    
    //btn.onclick = btnclicked;
    
    btn.ondblbclick = doubleClicked;
    btn.onmouseenter = function () {
        console.log("you entered a button");
    };

    btn.onmouseleave = function() {
        console.log("you leaved the mouse.")
    }

    console.dir(btn);
}

function btnclicked() {
    alert("button was clicked.");
}

function doubleClicked() {
    console.log("you doubled clicked the button.");
}




