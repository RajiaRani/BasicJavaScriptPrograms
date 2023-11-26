
/*let btn = document.querySelector("button");
//let user =document.querySelector("user");
//let pass = document.querySelector("pass");
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
      event.preventDefault();
      console.dir(form);
    let user = this.elements[0];
    let pass = this.elements[1];
     console.log(user.value);
     console.log(pass.value);
     alert(` Hii, ${user.value} yours password is set to ${pass.value}.`);
});
*/


let url = "https://catfact.ninja/fact";
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