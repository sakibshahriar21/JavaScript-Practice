// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person_1 = { //JS will treat json object as JS object if we write it in js file
    "name" : "Sakib",
    "age" : 24,
    "hometown" : "Dhaka",
    "married" : false
};

/*var person_2 = {
    name : "Jami",
    age : 25,
    hometown : "Chattogram",
    married : true
};*/

//var person_1_json = JSON.parse(person_1); will give error, object to object conversion!!!
var person_1_json = JSON.stringify(person_1); // we will use stringify() to convert JSON Object(string) in JS to JSON Object

var person_1_object = JSON.parse(person_1_json); // again convert JSON String to JS object


//console.log(person_2);
console.log(person_1_json); 
console.log(person_1_object);

//console.log(person_1.name); // we can print JSON format data like JS Object
//console.log(person_1.age)