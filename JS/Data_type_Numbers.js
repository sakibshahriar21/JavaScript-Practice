x = 123e5; //exponential 
y = 123 * 10**5;
console.log(x == y); // true 

z = 123e-5;
w = 123 * 10**-5;
console.log(z);
console.log(w);
console.log(z == w);

console.log(34 + 45 + "45");
console.log("the result is: " + 34 + 45);
console.log("25" - "5");
console.log("25" / "5");
console.log("25" * "5");
console.log("25" % "5");
console.log("25" + "5"); // exception
console.log(25/0);
var Y = 25/0;
console.log(Y);

// hex numbers
var hex = 0xBB;
console.log(hex); //input in decimal 
console.log(hex.toString()); //number to string
// decimal to binary

var decimal_num = 187;
var binary_num = decimal_num.toString(2); // we can give base in toString method!
console.log(binary_num);

//hex to binary
hex = 0xBB;
binary_num = hex.toString(2);
console.log(binary_num);

//decimal to oct
var oct = decimal_num.toString(8);
console.log(oct);
//decimal to hex
console.log(hex = decimal_num.toString(16));

//precision method will also convert number to string 
pi = 3.1416;
Z = pi.toPrecision(); console.log(Z);
Z = pi.toPrecision(1); console.log(Z);
Z = pi.toPrecision(2); console.log(Z);
Z = pi.toPrecision(3); console.log(Z);
Z = pi.toPrecision(4); console.log(Z);
Z = pi.toPrecision(5); console.log(Z);
Z = pi.toPrecision(7); console.log(Z);

console.log(parseInt(Z));
console.log(parseFloat(Z));
console.log(parseFloat(pi.toString()));

//isNaN method ,is not a number 
var str = "sakib"
console.log(isNaN(str)); 
console.log(isNaN(pi));
var X = "125sasd"
console.log(isNaN(X));