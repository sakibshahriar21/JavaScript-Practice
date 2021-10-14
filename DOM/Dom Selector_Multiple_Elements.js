//MultiSelector
// document.getElementsByClassName()

let list = document.getElementsByClassName('sample-class');

list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = "Hello World!";


//document.getElementsByTagName()
list = document.getElementsByTagName('li');

/*console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4]);*/ //can access everything that li tag contains
 
//specific access
list = document.querySelector('ol').getElementsByTagName('li');
//console.log(list[3]);

let lis = Array.from(list); //need to convert it to array 1st!
lis.forEach(function(item){
    console.log(item);
});

//document.querySelectorAll()
// id -> #
// classname -> .
//tagname -> nothing need to used at 1st

list = document.querySelectorAll('.sample-class');
console.log(list);

list = document.querySelectorAll('ol li'); //tag in tag access 
console.log(list);

list.forEach(function(item){ //querySelectorAll will create an array autotamically
    console.log(item);
});


let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item){
    item.style.background = 'grey';
    item.style.color = 'white';
});

liEven.forEach(function(item){
    item.style.background = 'yellow';
    item.style.color = 'blue';
});




