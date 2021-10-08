// for-in works with string,array,object [ returns index]
//For-of works with string,array [returns values/items]

let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Icecream"]
let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33
}

for(var i in name){
    console.log(`index ${i} and item ${name[i]}`);
}

for(var i of name){
    console.log(i);
}

for(var i in food){
    console.log(`index ${i} and item ${food[i]}`);
}

for(var i of food){
    console.log(i);
}

for(var i in person){
    //console.log(i); // objects do not have index, only item will be shown
    console.log(`Property: ${i}
    Value: ${person[i]}`); // person.x will not work properly here
}

for(var i of person){
    console.log(i); //error! not iterable for of
}

