var a = 10;
a += 7; //var: reassign and re-declare

var a; // we can re declare with var when using it

let b = 6; //let : only reassign  
b = b * 6;

//let b; we can re declare with let when using it

const c = 7; // const: no reassign or re-declare


//Global Scope

var num1 = 1;
let num2 = 2; //global value will alayws the same
const num3 = 3; //global value will alayws the same
var global_var = 100;

console.log(`Global scope: `, num1, num2, num3);

function scopeTest() {
    var num1 = 4;
    let num2 = 5;
    const num3 = 6; // num1 num2 and num3 are in local scope
    console.log(`Function Scope: `,num1, num2, num3, global_var);
}

scopeTest();
console.log(`Global scope: `, num1, num2, num3);

if(true){
    var num1 = 7; //in if scope var value will change in global as well
    let num2 = 8; 
    const num3 = 9;
    console.log(`if scope: `, num1, num2, num3);

}
console.log(`Global scope: `, num1, num2, num3);

for(var num1 = 0; num1<10; num1++){ //in for scope var value will change in global as well
    console.log(`Loop: `, num1);
}
console.log(`Global scope: `, num1, num2, num3);