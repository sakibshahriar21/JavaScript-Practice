var str = "Hello World";
console.log(str);

var x = "hello";
var y = " world";
var z = x + y;
console.log(z);
console.log(z.length);
var Z = "Hello \nworld!"
console.log(Z);
console.log(Z.length);
console.log(z);

var myName = "Md. Sakib Shahriar";
console.log(myName[0]);
console.log(myName[5]);
console.log(myName[9]);
console.log(myName[12]);
console.log(myName[15]);
console.log(myName[20]); 

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

myName = "  Md. Sakib Shahriar  ";
console.log(myName.trim()); // trim removes white-spaces at start and end
X = "Md. Sakib Shahriar";
console.log(X.slice(1,4)); // index , index
console.log(X.slice(-5,-1)); // last index -1
console.log(X.slice(1)); 

console.log(X.substr(4,2)); // index , length  
console.log(X.substr(3)); // start index to all
console.log(X.replace("Sa","A")); // whome to replace , new string
console.log(X.replace("Md.","MD.")); 
var x= "ABC"
console.log(x.concat(X,"EGF", "123")); 
console.log(X.substring(4,9)); 
console.log(X.startsWith("M"));
console.log(X.startsWith("m")); 
console.log(X.endsWith("r"));
console.log(X.endsWith("R"));
console.log(X.includes("sakib"));
console.log(X.includes(" "));
console.log(X.lastIndexOf());
console.log(str.split());
console.log(X.search("b")); //Searches a string for a specified value, or regular expression, and returns the position of the match

