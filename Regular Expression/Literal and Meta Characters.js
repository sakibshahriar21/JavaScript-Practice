let re;
let str;

//Literal Character {check extactly the value we give}
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo w/i;
re = /low/i;

//Meta Characters
re = /^Hello/; // ^ = Must start with
re = /hello$/; // $ = Must end with
re = /rld$/;
re = /World$/;
re = /^Hello$/; // ^X$ = must start and must end with
re = /^h.llo$/; // matches any 1 character , can accept any character in place of .
re = /h.llo/
re = /h*llo/; // * = 0 r more times in place of .
re = /he?a?llo/; // ? = means optional e? = either 1 e or no e 
re = /hello\?/; // checking ? using \

str = "Again Hello World";
str = "Hello Hello";
str = "Hello";
str = "hello";
str = "h llo";
str = "";
str = "hllo";
str = "hillo world";
str = "hello world";
str = "hillo";
str = "Again heee5656llo World";
str = "hello";
str = "htllo";
str = "heallo";
str = "hallo";
str = "hello";
str = "hllo";
str = "hello?";

console.log(re.exec(str));
reTest(re, str);

function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }
    else{
        console.log(`'${str}' doesn't matches '${re.source}'`);
    }
}