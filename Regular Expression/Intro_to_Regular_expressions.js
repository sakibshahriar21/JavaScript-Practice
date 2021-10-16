// Regular Expression
// Pattern Matching Technique

let re;

/*re = /hello/; //define rule of RE /X/ , where X = characters
re = /Hello/;*/

//for removing case sensitivity we need to put an i at the end of RE

re = /hello/i; // i = case insensitive

console.log(re);
console.log(re.source); //Source of RE 

str = "Hello World";
str = "Again Hello World";
str = "Hell World";
str = "!@#hello5454";
str = 'Again Hello World Hello'; // if more similar patterns found , only the first one will be counted
str = "";

// exac() -> Returns result in an array or null
let result = re.exec(str); // exac() is method of RE
/*null, becuase js is case-sensitivity
                     // otherwise returns an array*/

// test() -> Returns true if match found, otherwise false
result = re.test(str);

// match() -> Returns array or null , same as exac()
result = str.match(re); // match() is a method of String object

// search() -> Returns index of the first match or -1
result = str.search(re);

// replace() -> Returns new string 
str = 'Again Hello World Hello';
let new_str = str.replace(re,"Hi");

console.log(result); 
console.log(str);
console.log(re.source);
console.log(new_str); // if more similar patterns found , only the first one will be replaced
