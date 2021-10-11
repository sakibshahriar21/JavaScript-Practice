//Math object is a buit in object in js

let value;

value = Math.PI;
value = Math.E;
value = Math.round(3.1);
value = Math.ceil(1.1);
value = Math.floor(1.9);
value = Math.sqrt(81);
value = Math.cbrt(16);
value = Math.abs(-8);
value = Math.pow(2,3);
value = Math.min(1,-8,10,-5,2);
value = Math.max(1,-8,10,-5,2);
value = Math.random();
value = Math.floor(Math.random() * 100 + 1); // generating random number between 1 to 100

console.log(value);

//Date object

let val;
let today = new Date(); // will show current date
let birthday = new Date("07-23-1997 17:00:00"); // month,date,year ,hour,minute,second
birthday = new Date("July 23 1997 17:00:00");
birthday = new Date('7/23/1997');

val = today.toString();
console.log(today);

val = birthday;
val = today.getMonth(); //JS starts month counting for 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // timestamp => amout of seconds passed since January 1st 1970

console.log(val);

birthday.setMonth(5);
birthday.setDate(24);
birthday.setFullYear(1999);
birthday.setHours(9);
birthday.setMinutes(0);
birthday.setSeconds(55);
console.log(birthday);