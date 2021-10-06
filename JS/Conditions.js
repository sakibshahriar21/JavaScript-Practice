//basic if, else if, else
//var age = prompt("Enter your age: ");

if(age >= 50){
    console.log("Old!");
} else if(age < 50 && age >= 30){
    console.log("Under 50 but above or equal 30");
} else if(age < 30 && age >= 18){
    console.log("Under 30 but above or equal 18");
} else if(age < 18 && age > 0){
    console.log("Under 18!");
} else {
    console.log("Invalid Input!");
} 

var num1 = prompt("First Number: ");
var num2 = prompt("Second Number: ");
var num3 = prompt("Third Number: ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

/*if(num1 >= num2 && num1 >= num3){
    console.log(`${num1} is the larger number!`);
} else if(num2 >= num1 && num2 >= num3){
    console.log(`${num2} is the larger number!`);
} else {
    console.log(`${num3} is the larger number!`);
}*/

if(num1 >= num2){
    if(num1 >= num3){
        console.log(`${num1} is the larger number!`);  
    }
    else{
        console.log(`${num3} is the larger number!`);
    }
} else{
    if(num2 >= num3){
        console.log(`${num2} is the larger number!`);
    }
    else{
        console.log(`${num3} is the larger number!`);
    }
}
    