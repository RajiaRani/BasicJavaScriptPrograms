//create emepty gameSequenece and userSequence
let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
//start the game
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started.");
        started = true;

        levelUp();
    };
});

function buttonFlash(btn){
    //add kar do flash class button ke upper
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userbuttonFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
//level increase
function levelUp(){
    level++;
   h2.innerText = `Level ${level}`;
  
   //create random index
   let randomIdx = Math.floor(Math.random() * 3);
   //console.log(randomIdx);
   let randomColor = btns[randomIdx];
   //console.log(randomColor);

   //jise hi random color generate ho jayega hum usko gameSeq mein add kar dege
   gameSeq.push(randomColor);
   console.log(gameSeq);
   let randomBtn = document.querySelector(`.${randomColor}`);
   buttonFlash(randomBtn);
}
//check that user ne jo last color add kiya hai kya wo humare gameseq se match karta hai ya nhi.
function checkColor(){
  //track the level
  //console.log(`current level :`, level); 

  let index = level - 1;

  if(userSeq[index] === gameSeq[index]){
    console.log("same value");
  }
  else{
    h2.innerText = (`Game Over ! Press any key to start.`);
  }
}




//user button  
function btnPress(){
   console.log(this);
   let btn = this;
    userbuttonFlash(btn);
   //adding all the colors in the gameSeq array
   //using id only using for the colors
   userColor = btn.getAttribute("id");
  // console.log(userColor);
   userSeq.push(userColor);
    checkColor();
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
    
}