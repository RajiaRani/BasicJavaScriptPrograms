//Promises----the promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.


//Ex.1
function savetoDb(data){
    //promise retuen kar raha hai
    return new Promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10)+1;

        if(internetSpeed > 4){
            resolve("success : promise was fulfilled.");
        } else{
            reject("failure: weak connection.");
        }
    });
}

//Promise have two methods 
//1.then() - multiple tries
//2.catch() - single catch

/* Method.1
let request = savetoDb("Apna India"); //request= promise object
request.then( () => {
    console.log("promise was resolved.");
    console.log(request);
})
.catch(() => {
    console.log("promise was rejected.");
    console.log(request);
})



//improved version
savetoDb("apna india").then(() => {
    console.log("promise resolved");

})
.catch(() => {
    console.log("promise rejected");
});

*/



//--------PROMISE CHAINING-------------

/*
savetoDb("apna india").then(() => {
    console.log("data1 saved");
    savetoDb("i love my india").then(()=>{
        console.log("data2 saved");
        savetoDb("I am missing").then( () => {
            console.log("data3 saved");
        });
    });

})
.catch(() => {
    console.log("promise rejected");
});
*/


//----------------improved version the above method-------
/*
savetoDb("apna india").then(() => {
       console.log("data1 saved");
     return savetoDb("i love india");
})
.then( () => {
    console.log("data2 saved");
    return savetoDb("i miss india");
})
.then( () => {
    console.log("data3 saved");
})
.catch( () => {
    console.log("promise rejected");
});
*/

savetoDb("apna india").then((result) => {
    console.log("data1 saved");
    console.log("result of promise",result);
  return savetoDb("i love india");
})
.then( (result) => {
 console.log("data2 saved");
 console.log("result of promise",result);
 return savetoDb("i miss india");
})
.then( (result) => {
    console.log("result of promise",result);
    console.log("data3 saved");
})
.catch( (error) => {
    console.log("error of promise",error);
   console.log("promise rejected");
});