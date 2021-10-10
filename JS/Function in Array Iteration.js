var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31,2];

//  forEcach(function( , , )) can pass upto 3 parameters
//1st parameter : Item
//2nd parameter : Index
//3rd parameter : Whole Array

foods.forEach(function(item, index, array){
    console.log(`Index : ${index} and Item ${item}`);
    console.log(array);
});

let foodList = function(item, index, array){
    console.log(`Index : ${index} and Item ${item}`);
    console.log(array);
}

foods.forEach(foodList); //1st bracket can not use when calling a function inside from forEach()


let foodList_Arrow = (item, index, array) => {
    console.log(`Index : ${index} and Item ${item}`);
    console.log(array);
}

foods.forEach(foodList_Arrow);


//Array Iteration using Mapping

function addSomething(item) {
    return `${item} is a Food`;
}

let arr_res = foods.map(addSomething);
let arr_square = numbers.map(function(item){
    return item * item;
});

console.log(arr_res);
console.log(arr_square);



