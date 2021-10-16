// Error Handling

console.log("Before Error!");

try {
    //text(); // possibily error code
    undefined.text();
} catch(error){
    //console.log(error);
    console.log(error.message);
    console.log(error.name); //error type
} finally{
    //code in this block will always run!
    console.log("I am inside finally!");
}

console.log("After Error!");

//throw , by using throw we can make self defined error message!

let num =  19;

try{
    if(num>15) throw "Too Large";
    else if(num<5) throw "Too small";

} catch(error){
    console.log(error);
}
