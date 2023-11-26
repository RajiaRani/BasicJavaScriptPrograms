//storing information of multiple objects

const classInfo = {
    //1st object information
    Rajia : {
        stream:"Non-Medical",
        grade : '+A'
    },

    //2nd object
    Chenchu :{ 
        stream:"Non-Medical",
        grade : '+B'
    },

    //3rd object
    Shiva : {
        stream:"Medical",
        grade : 'O'
    }
};
console.log(classInfo);
console.log(classInfo.Rajia);
console.log(classInfo.Rajia.stream);
classInfo.Shiva.stream = "Non-Medical";
console.log(classInfo.Shiva);

