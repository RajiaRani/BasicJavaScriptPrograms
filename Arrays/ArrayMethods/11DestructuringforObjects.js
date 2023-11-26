
const student = {
    name:"rohan",
    age : 14,
    class : 9,
    subjects:["hindi", "punjabi", "english", "math", "science"],
    username:"rohan@123",
    password:"abcd",
};
let { username: user, password:secret, city ="Jalandhar"} = student;
console.log(user, secret, city);