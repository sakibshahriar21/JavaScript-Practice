// Primitive Types : number, string , boolean
// deals with value
let a = 7;
let b = a; // b = 7 will be execute, value of a stored in value f b
          // a and b will store in different address

a = 45; 
console.log(b);

//Reference Types: array, object
// deals with address, values will save in same address
let numbers = [1,2,3];
let newNumbers = numbers;
console.log(newNumbers);
numbers[1] = 216;
console.log(numbers); 
console.log(newNumbers);

