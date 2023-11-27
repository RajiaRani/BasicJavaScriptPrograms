

/*
fetch(url)
.then((response) => {
  //console.log(response);
  return response.json();
  
})
.then((data)=>{
  console.log(data.fact);

  return fetch(url);
})
.then((res)=> {
  //console.log(res);
  return res.json();
})
.then((data2)=>{
 console.log(data2.fact);
 return fetch(url);
})
.then((res2)=>{
  return res2.json();
})
.then((data3)=>{
  console.log(data3.fact);
})
.catch((error) => {
  console.log(error);
});
*/

//----------await async method------------
/*
async function getFacts() {
    try {
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        //console.log(data);
        console.log(data.fact);

        let response2 = await fetch(url);
        console.log(response2);
        let data2 = await response2.json();
        //console.log(data);
        console.log(data2.fact);

    } catch(error){
        console.log("error is - ", error);
    }
}
console.log(getFacts());

*/

//----------AXIOS Method--------------------
/*
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    //console.log("button was clicked.");
    let fact = await getFacts();
    //console.log(fact);
    let p = document.querySelector("p");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {

        let res = await axios.get(url);
        //console.log(res);
        //console.log(res.data);
        //console.log(res.data.fact);
        return res.data.fact;
    }
    catch (e) {
        //console.log("error is - ", e);
        return "No fact found!!"
    }
}
console.log(getFacts());



let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");


btn2.addEventListener("click", async () => {
    let link = await getImage();
    //console.log(link);
    let img = document.querySelector("#img");
   img.setAttribute("src", link);
});


async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        return "No fact found!!";
    }
}


//-----------sebding header----------
let url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {header: {
            Accept : "application/json"
        }};
        let res = await axios.get(url3,config);
        //console.log(res);
        console.log(res.data);
    } catch (e) {
        console.log(e);
    }
}
*/
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    //console.log("button was clicked.");
    let country = document.querySelector("input").value;
    console.log(country);
    let clgArr = await getColleges(country);
    //console.log(clg);
    show(clgArr);
});
function show(clgArr) {
    let list = document.querySelector("list");
    for (clg of clgArr) {
        // console.log(clg);
        //console.log(clg.name);
        let li = document.createElement("li");
        li.innerText = " ";
        li.innerText = clg.name;
        list.appendChild(li);
    }
}
let url = "http://universities.hipolabs.com/";

async function getColleges(country) {
    try {
        let result = await axios.get(url + country);
        //console.log(result);
        return result.data;
    }
    catch (e) {
        //console.log("error is : ",e);
        return "Nothing is found!!!"
    }
};
console.log(getColleges());
