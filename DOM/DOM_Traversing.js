//Traversing the DOM

let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li');
listFstItem = document.querySelector('ul li:first-child');
listItem = document.querySelector('ul li:last-child');

val = list;
val = listItem;

//get the child nodes
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[3];
val = list.childNodes[1].nodeName; //for nodename
val = list.childNodes[1].nodeType;
/* 1 Element
   2 Attribute
   3 Text Node
   8 Comment
   9 Document Itself
   10 Doctype */
val = list.childNodes[0].nodeType;


val = list.childNodes;
val = list.children; // for ignoring text
val = list.children[0].textContent = "GOOGLE"
val = list.children[1].children;
val = list.children[1].children[0];
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.lastChild;
val = list.firstElementChild;
val = list.lastElementChild;
val = list.childElementCount; // without text element count

val = listItem;
val = listItem.children;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listFstItem.nextSibling.nextSibling;
val = listFstItem.nextElementSibling; //for ignoring text Element is used
val = listFstItem.nextElementSibling.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val); // output has text in every odd index! this happbed beacuse we press enter at the end of the line of all codes

