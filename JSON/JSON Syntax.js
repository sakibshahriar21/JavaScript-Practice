
//Objects
var student = {
    name: "Sakib",
    age: 24,
    hometown: "Dhaka"
};

var student_json = JSON.stringify(student); //it will convert js object to json

console.log(student_json);

//JSON
/*var student_new_json = {
    "name" : "Akib",
    "age" : 24,
    "hometown" : "Dhaka"
};*/

var student_new = JSON.parse(student_json); //it will convert JSON to js objects
console.log(student_new);