let num1 = 23;
let num2 = 345;
let num3 = 12;

if(num1 > num2){
    if(num1 > num3){
    console.log(num1, "is largest");
    }
 else {
    console.log(num3, "is largest");
}
}else{
    if(num2 > num3){
        console.log(num2, "is largest");
    } else{
        console.log(num3, "is largest");
    }
}