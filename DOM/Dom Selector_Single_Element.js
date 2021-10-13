// document.getElementById() , this will get a single specific element by id
let val;

//Getting element , if multiple element has same id, then this will get 1st element
val = document.getElementById("document-title");
val = document.getElementById("document-title").className;
val = document.getElementById("document-title").classList;

//Changing Style
document.getElementById('document-title').style.background='#333'; //changing CSS using style!
document.getElementById('document-title').style.color='#fff'; // chaning text color
document.getElementById('document-title').style.padding='10px'; // changing padding
document.getElementById('document-title').style.display="none"; //hide items
document.getElementById('document-title').style.display="block"; //show hidden items


//Chaning Content
document.getElementById('document-title').textContent="New Title"; // changing text
document.getElementById('document-title').innerText="Again New Title";
document.getElementById('document-title').innerHTML="<i>Again Again New Title</i>"; // to change html codes directly! innerText won't work

//Simplifiction

val = document.getElementById('document-title');
val.innerText = "Simplified Title";

//document.querySelector() , we can call through tag, name, class and id as well

val = document.querySelector('#document-title');  //in-case of id we need to put # at first

val = document.querySelector('.title-class'); // . will be used at 1st if we want call through class

val = document.querySelector('h3'); //calling through tag

val = val = document.querySelector('ol');

val = document.querySelector('ol li'); // parenting: ol li , means access li of ol

//val = document.querySelector('ul li');

val.style.background= 'blue';
val.style.color='white'; //font color change

val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(1)'); // li = the tag which we want to work with, nth child of li tag , counting starts from 1

document.querySelector('li:nth-child(1)').innerText = "C";
document.querySelector('li:nth-child(odd)').innerText = "C/C++"; // first of odd
document.querySelector('li:nth-child(even)').innerText = "JAVA";
console.log(val);