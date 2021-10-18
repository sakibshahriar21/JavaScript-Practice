let re;
let str;


// Shorthand Character Classes

re = /\w/; //Word character-> alpha numeric, Word character matches single character
//re = /w/; //checking only for w , literal character
re = /\w+/; //one or more alpha numeric character
re = /\W/; //Non Word Character, matches single character
re = /\W+/; //One or more Non Word Character
re = /\d/; //Single digit character check
re = /\d+/; // One or more digit charater check
re = /\D/; //Single non digit character check [ for non digit only]
re = /\D+/; //One or more non digit character check [ for non digit only]
re = /\s/; //Match white space
re = /\S/; //Match non white space
re = /\b/; //word boundary
re = /Hello\b/; //means only Hello x x will be accepted, x = characters
re =/\bHello\b/; //starts with specific word and then whitespaces allwed

//Assertions

re = /x(?=y)/; //Matches x only if x is before y
re = /x(?=yz)/; 

re = /x(?!yz)/;//matchtes x only if x is not before yz

/*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);


str = "+8801600000000";
str = "(#&^";
str = "(#&v^"; 
str = "h14214hbkk#";
str = "02141654";
str = "55 54";
str = "8988";
str = " ";
str = "Hello Sakib";
str = "Hello21 Sakib";
str = "Hello 21 Sakib";

str ="xyyyy";
str ="xyz";
str = "sdxgsyzdgg";


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