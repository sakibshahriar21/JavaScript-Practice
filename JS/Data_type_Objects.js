var arr = [1, 2, 3];
console.log(arr);

var student = {name:"Sakib", age:22, hometown:"Dhaka"};
console.log(student);
console.log(student["name"]);
console.log(student["age"]);
console.log(student["hometown"]);
console.log(student.name);
console.log(student.age);
console.log(student.hometown);

//updating object, add/delete
 
student.village = "kolatoli";
console.log(student);
student["occupation"] = "Student";
console.log(student);

delete student.village;
console.log(student);

student = { } // empty object

student.name = "Sakib";
student.id = 122;
console.log(student);

arr = [10, 12, 8, 9];

arr = [10, 12, ["a","b"], 8, 9]; //array in array
console.log(arr);
console.log(arr[2][0]); // arr[2] for nested array and [0] for accessing elements

arr = [1,2,["a", ["word1","word2"], "b"],7,18];
console.log(arr);

console.log(arr[2][1][0]); 
console.log(arr[2][1][1]); 
console.log(arr[2][0]);
console.log(arr[2][2]);  

//objects in array
arr = [1,2,["a","b"], {prop1: "item1", prop2: "items2"}];
console.log(arr);

console.log(arr[3]);
console.log(arr[3].prop1);
console.log(arr[3]["prop1"]);

arr = ["item1", "item2", {prop1: "item1", prop2:[1,2,["a","b"]]}];
console.log(arr);

console.log(arr[2]["prop2"][2][0]);
console.log(arr[2].prop2);

//array in objects
obj = {prop1: "item1", prop2: "item2", prop3: ["item 1 of prop3", "item 2 of prop3"]};
console.log(obj);
console.log(obj.prop3[1]);


