//Object Method

let person = {
    firstname: "Md. Sakib", //property = value, method = function
    lastname: "Shahriar",
    DoB: "23-07-1997", // number, string, date, array, object and function as well

    fullname: function() { //method of object
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(person.firstname);
console.log(person.fullname()); // use first bracket to execute the function, otherwise full function it self will be printed

let str = "This is a String";
console.log(str.length) // length is property of string(built in object in JS), thats why we can use it without first bracket
console.log(str.slice()) // slice is a method

// JS treats everthing to OBJECT!
