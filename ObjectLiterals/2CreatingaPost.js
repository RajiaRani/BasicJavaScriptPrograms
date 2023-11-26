const post ={
    user_name :"RajiaSyal",
    content : "This is my #first post",
    likes : 150,
    repost : 5,
    //maybe their is multipe tags for that we create an array
    tags: ["@chenchureddy" , "@rajiarani" , "@dildejanni"]
};
console.log(post);
//to print particular key
//method 1
console.log(post["user_name"]);
console.log(post["likes"]);
//method 2
console.log(post.content);
console.log(post.tags[0]);

let prop = "repost";
console.log(post[prop]);


const obj = {
     1:'a',
     2:'b',
     null:'n',
     true:'t',
     undefined:'u',
     boolean:'boo',

};
console.log(obj[1]);
console.log(obj[2]);
console.log(obj.null);
console.log(obj.boolean);