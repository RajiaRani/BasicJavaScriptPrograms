let btn1 = document.querySelector("#btn");
let form = document.querySelector(".form");
let inp = document.querySelector("input");

form.addEventListener("submit", function(event){
     event.preventDefault();
    let name = this.elements[0];
    let roll = this.elements[1];
    let dob = this.elements[2];
    let cell = this.elements[3];
    let str = this.elements[4];
    let sub = this.elements[5];
    
    
    alert(`${name.value} roll- number is ${roll.value}. your date of birth is ${dob.value} and cell phone number is ${cell.value}. you are taking the addmission in ${str.value}`);
    //console.log("submitted");
    

    });

