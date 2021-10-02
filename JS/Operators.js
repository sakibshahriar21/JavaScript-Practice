var num = 7;
num = num ** 2;
console.log(num);

var a = 5;
var b = 7;

var c, d;

/*c = a++; // it means value of a will be assigned in C then value of a will increase by 1(Post increment)
d = ++b; // value of b will incease by 1 1st then assigned to d. (Pre increment)

console.log(c);
console.log(a);
console.log(d);
console.log(b);*/

c = a--; // post decrement
d = --b; // pre decrement

console.log(c);
console.log(a);
console.log(d);
console.log(b);

a = (3 - 5) * 5 / 7 + 4 ** 4;
console.log(a);

//String Operators

var line1 = "Hello";
var line2 = "World";
console.log(line1 + " " + line2);
console.log(36 + "Hello");
console.log("Hello" + 4 + 36);
console.log(34 + 4 + "Hello"); //will read from left to right
console.log("76" - "3"); // will perform arithmatic substraction
console.log("76" + "3"); // will perform string concatanation
console.log("45" - "Sakib"); // Not a number, NaN is a data type which is used in special case
