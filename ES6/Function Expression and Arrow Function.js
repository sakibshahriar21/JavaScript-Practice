//normal declaration

function saySomthing(str){
    console.log(str);
}

//function Expression

let saySomthing1 = function(str1){
    console.log(str1);
}

//Arrow function

let saySomthing2 = () => {
    console.log("I am an arrow function!");

}

saySomthing("Hello World!"); 
saySomthing1("Hello World Again!");
saySomthing2();

let addition = (num1, num2) => {
    return num1 + num2;
}

console.log(addition(100,200));

let even_odd_Checker = num => { //if we don't give bracket, we can not pass multiple parameter but single parameter.
    if(num % 2 == 0)
        return "Even"
    return "Odd";       
}

console.log(even_odd_Checker(1010));

let a = (name) => { 
    return (age) => console.log(name, age) 
}

a("Sakib")(24);