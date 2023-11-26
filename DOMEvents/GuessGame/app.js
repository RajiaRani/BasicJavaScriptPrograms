let btn = document.querySelector("button");
let inp = document.querySelector("input");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let p = document.querySelector(".para");

btn.addEventListener("click", function(){
   const userInput = inp.value;
    
   if(userInput === " " || userInput ==NaN || userInput < 0 || userInput>10)
   {
    alert("Please, enter a valid number between 1 and 10 .")
   }

   const userGuess = parseInt(userInput);

   if(userGuess == randomNumber){
    p.innerText = ("Congratulation! your gussed the correct number.");
   }else {
    p.innerText = (`Sorry, the correct number was ${randomNumber}, Try again!!`)
   }
});