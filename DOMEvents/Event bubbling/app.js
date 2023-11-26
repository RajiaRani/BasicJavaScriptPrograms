let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked.");
});


//jise hi hun nested ko trigger karte hai to uska parent bhi trigger hoga to stope this bubbling we are using
//stopPropagation method
ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked.");
});

for( let list of lists){
    list.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("List was clicked.");
    });
}