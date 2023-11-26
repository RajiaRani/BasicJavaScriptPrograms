//-------------Async function--------

// async functions likhne se code aur bhi easy ho jata hai.
/*
async function greet(){
    //throw keywords using to throw the error
    throw "week connection";
    return "hello";
}
greet()
.then((result)=> {
    console.log("promise was resolved");
    console.log("result was:",result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error was:",error);
});



let demoFunction = async() =>{
    return 5;
};

*/



//--------------Await Keyword-----------------


//Ex.1
function getNum() {
    return new Promise((resolve, reject) => {
        //to make the function async we give the setTimeout function
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            //return num;
            console.log(num);
            resolve();
        }, 1000);
    });

}

async function demo() {
    //await matlab jab tak humari await wali print nhi ho jati baki koi bhi print nhi hogi before that.
    await getNum();
    await getNum();
    await getNum();
    getNum();

}


//Ex.2

let h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 3) {
                reject("promise rejected");
            };

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("promise resolve");
        }, delay);
    });
}
async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("blue", 1000);
        await changeColor("pink", 1000);
    } catch(error){
        console.log("error got caught");
        console.log(error);
    }

    let a = 5;
    console.log(a+7);
}