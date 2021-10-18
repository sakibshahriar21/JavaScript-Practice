let re;
let str;

//Character Set using Brackets []
re = /h[ea]llo/; //Must be one of them inside  brackets
re = /[HA]ello/;
re = /[HA]ello/i;
re = /[^ha]ello/; //Anything except those inside brackets
re = /[^ha]ello/;
re = /^[ha]ello/; //Must Start with h or a
re = /[a-z]ello/; //Means starting character can be a to z. / start with lowercase
re = /[a-f]ello/; //Means starting character can be a to f.
re = /[A-Z]ello/; //Means starting character can be A to Z. / Start with uppercase
re = /[A-Z]ello/i; //case insensitive

re = /^[A-Z]ello/; // we can use it in form! Must start with uppercase letter
re = /^[A-Z]/; //starting character must be uppercase
re = /^[a-z]/; //starting character must be lowercase
re = /[A-Za-z]/; //Range A to Z , a to z
re = /[0-9]ello/; // single digit then ello
re = /^[0-9]ello/; //Starting must be a single digit then ello
re = /[^0-9]ello/; //No Digit!
re = /[0-9][0-9]ello/; //2 digits then ello
re = /^[0-9][0-9][0-9]ello/; //Must start with 3 digits! then ello

/*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

re = /^([aeiou]).*\1$/;

/*1- ^ asserts position at start of the string
2- 1st Capturing Group ([aeiou])
3- .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy)
4- \1 matches the same text as most recently matched by the 1st capturing group
5- $ asserts position at the end of the string */

/*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

re = /([0-9])+/g;
/*
        g is used for global search, search
        for input 999.99 it will give an 
        output as split as 999, 99
*/

  
// Braces {} -> Quantifier
//Quantifier means ekta jinish koy bar hote hobe

re = /el{2}o/; //the letter before {} , how many times need to be appeared
re = /el{3}o/; //Must occur exactly 3 times**
re = /hel{2,5}o/; //the letter before {} , how many 2-5 times need to be appeared
re = /hel{2,}o/; //l need to be atleast 2 times

// Parentheses () -> Grouping

re = /^([0-9]){5}/; //0 to 9 with 5 digits , same to /^[0-9][0-9][0-9][0-9][0-9]/
re = /^([0-9]){20}/; //0 to 9 with 10 digits

//checking for Bangladeshi phone number
re = /^01[0-9]{9}$/; // starts with 01 and there will be exactly 11 numbers

//checking for Bangladeshi phone number with country code
re = /^\+8801[0-9]{9}$/;

//pattern matching digit then x (repeat)
re = /^([0-9]x){3}/;

re = /^([0-9]xy){5}/;

str = "hello";
str = "hallo";
str = "hllo";
str = "Aello";
str = "aello";
str = "hello";
str = " ello";
str = "tello";
str = "Hello";
str = "Sakib";
str = "Again 1ello!";
str = "22ello";
str = "122ello";
str = "helllo";

str = "33355";
str = "01500000000";
str = "+8801500000000";
str = "2x5x7x";
str = "2xy3xy5xy6xy7xy";

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