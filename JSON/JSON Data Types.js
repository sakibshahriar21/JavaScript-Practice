// https://jsonlint.com -> this website will help to verify JSON Data
//string
//number
//object(JSON object)
//array
//boolean
//null
//JSON only support: String,number,object,array,boolean,null
//JSON doesn't support: undefined, date, function

var person = { //JS Object
    name: "Sakib", //string
    age: 24, //number
    hometown: "Dhaka",
    married: false, //boolean
    dob: 1997-07-23, //date
    test_null: null, //null
    test_undefined: undefined, //undefined
    greet: function() {        //function
        console.log(`Hello ${this.name}`);
    }
}

var person_json = JSON.stringify(person);
console.log(person_json);