
//create array
 const students =[
    //create object 1
    {
        //storing data
        name:"rajia",
        stream:"non-medical",
        class:"MSc"
    },
    //create object 1
    {
        //storing data
        name:"chenchu",
        stream:"non-medical",
        class:"B.Tech"
    },
    //create object 1
    {
        //storing data
        name:"shiva",
        stream:"non-medical",
        class:"+12"
    }
 ];
 console.log(students);
 console.log(students[0].name);
 console.log(students[1].name);
 console.log(students[2].name);

 console.log(students[0].class);
 console.log(students[1].class);
 console.log(students[2].class);

 students[1].stream = "Computer Science";

 //add new property
 students[0].gender = 'female';
 console.log(students);