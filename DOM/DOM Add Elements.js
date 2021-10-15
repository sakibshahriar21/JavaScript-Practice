// Adding element to DOM
// Create element

let olItem = document.createElement('li');

//Add ID and class
olItem.className = "a new another-class";
olItem.id = "new-element";

//Add attribute
olItem.setAttribute('title','A title to new Element'); // takes 2 parameter 1st is attribute type, 2nd is attribute

//Add contain to the middle
olItem.appendChild(document.createTextNode('PHP')); //createTextNode used to adding text

document.querySelector('ol').appendChild(olItem); // for show and adding new element in the OL
//console.log(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode("Instagram"));
link.setAttribute('href','https://www.instagram.com');
ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);
//console.log(link);


