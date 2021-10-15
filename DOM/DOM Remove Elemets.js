// Remove Element
// Method 1: using remove()
let listItem = document.querySelectorAll('li');
let list = document.querySelector('ul');

/*listItem[0].remove();
listItem[5].remove(); */

// Method 2: using removeChild()

//list.removeChild(listItem[0]); // this will give error becuase 0th element is in an unordered list!
list.removeChild(listItem[5]);

//class remove
list.classList.add("test");
list.classList.add("test-new"); //classList.add() will add new class, it will not replace any existing class!

list.classList.remove("sample-class");

//attribute remove

let val = list.hasAttribute('class'); // will check if class atrribute is present or not
val = list.hasAttribute('title'); 

list.setAttribute("title","New Title");
list.removeAttribute('title');
val = list.hasAttribute('title'); 

console.log(val);
console.log(listItem);
console.log(list);