let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log("clicked");
});

async function getFood(){
  try{
    let res = await axios.get(url);
    console.log(res);
    console.log(res.data.product);
  } catch(e){
    console.log("error is : ", e);
  }
};