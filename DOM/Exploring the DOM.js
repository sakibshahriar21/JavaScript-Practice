let val;
val = this; // this will show all browser element
val = window; // window will show all browser element
val = window.document; // will show everything in document
val = document.all;//it will collect all html tags into an array
val = document.all[5]; // we can also get the index value of that array
val = document.all.length;
val = document.head; //get specific element
val = document.body;
val = document.doctype;
val = document.domain; //get domain ip
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms; //pass all forms in an array
val = document.forms[0]; // forms can be indexed
val = document.forms[0].method
val = document.forms[0].action;

val = document.links; // pass all links in an array
val = document.links[0];
val = document.links[0].href; //get link 
val = document.links[0].className;
val = document.links[0].classList;

val = document.images; //pass all images in an array
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src; // to show source
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArray = Array.from(links); // converting collection of element in links to an array


linkArray.forEach(function(link){ //we can not apply forEach directly here!
    console.log(link);        // we need to convert t array 1st!
});

//console.log(links);