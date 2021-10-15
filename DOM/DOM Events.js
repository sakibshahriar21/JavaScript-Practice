//Events of JavaScript

function message(){
    console.log("Mouse over button");
}

// Event Listener
// we do not need to add on in addEventListener(), but we need to add it in HTML events
document.getElementById('sample-button').addEventListener('dblclick', Message); // no parentheses is needed to call Message function

//console.log(btn)


function Message(){
    console.log("Button Clicked");
}

