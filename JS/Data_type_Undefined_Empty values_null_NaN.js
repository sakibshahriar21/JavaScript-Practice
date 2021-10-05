var a;
console.log(a == undefined);
console.log(a === undefined); // checking with type
a = null;
console.log(null == undefined);

console.log(null === undefined);

var b = "";
console.log(b);
console.log(b == a);
console.log(null == "");

var c = "abc"/10;
console.log(c);

console.log(NaN == undefined);
console.log(NaN == null);