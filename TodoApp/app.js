let todo = [];
let req = prompt("please enter your request.");


//build while loop so that our todo work continuously.
while(true){
    //quit condition
    if(req == "quit") {
        console.log("quitting the todo app.");
        break;
    }

    if(req == "list"){
        console.log("------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------------");
    } else if(req == "add"){
        let task = prompt("enter the task which you want to add.");
        todo.push(task);
        console.log("task added");

    } else if (req == "delete"){
        let idx =prompt("please enter the taxt index.");
          todo.splice(idx,1);
          console.log("tast deleted.")

    } else{
        console.log("Opps! wrong request try again.");
    }
    req = prompt("please enter your request.");
}