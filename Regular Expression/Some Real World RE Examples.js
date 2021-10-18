//Examples 

let re;
let str;

//Postal Code
re = /^[0-9]{4}$/; //Must have 4 digits
str = "1205"

//Bangladeshi Operator Phone Number
re = /^01[0-9]{9}$/; //Must have a total of 11 digits with 01 as starting
re = /^\+8801[0-9]{9}$/;
re = /^(\+88)?01[0-9]{9}$/;
re = /^(\+)?(88)?01[0-9]{9}$/; //+88 is optional + is optional, 88 is also ptional

str = "+8801700000000";

//Email Address
//JavaScript6.learn@edu.com.bd

re = /^([a-zA-Z0-9])+$/;
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

str = "JavaScript6.learn@edu.com.bd";

console.log(re.test(str));