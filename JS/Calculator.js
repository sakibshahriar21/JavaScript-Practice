console.log(`Select an option:
1. Addition
2. Substraction
3. Multiply
4. Divide
5. Square Root of 1st number
6. Cubic Root of 1st number`);

var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the second number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1con = isNaN(num1);
var num2con = isNaN(num2);
var optioncon = isNaN(option);

if (num1con || num2con || optioncon){
    console.log("Invalid input!")
} else{
    switch(option){
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;    
            break;
        case 3:
            result = num1 * num2;    
            break; 
        case 4:
            result = num1 / num2;    
            break;
        case 5:
            result = Math.sqrt(num1);   
            break;  
        case 6:
            result = Math.cbrt(num1);   
            break; 
        default:
            break;                  
    }

    if(result == null){
        console.log("No Result!");
    }
    else{
        console.log(`Result: ${result}`);
    }
}


