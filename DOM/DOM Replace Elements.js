//Replacing Elements

let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));

newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');// if there are multiple h3 then only 1st of h3 will work

// to replace an element we need to call the parent of that element!
let parent = document.querySelector('.container');
//parent = oldHeading.parentElement;

parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);