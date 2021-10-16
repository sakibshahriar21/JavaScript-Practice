//document.getElementById('sample-button').addEventListener('click', message);

//document.querySelector(".container").addEventListener("mouseover", message);
document.querySelector(".container").addEventListener("mousemove", message);

document.querySelector(".container").style.background = "red";

function message(e){
    let val = e;
    val = e.target; // show the element that we added eventlistener
    val = e.target.id;

    val = e.timeStamp;// Show the delay time from loading the page to clicking
    val = e.type; // show the type of event

    val = e.clientY; //get the pixel value(of Y axis) of the mouse cursor position in the button
    val = e.clientX; //get the pixel value(of X axis) of the mouse cursor position in the button

    val = e.offsetY; //get the pixel value(of Y axis) of the mouse cursor position in the button [Range: button box area]
    val = e.offsetX; //get the pixel value(of Y axis) of the mouse cursor position in the button [Range: button box area]
 
    val = this; //this and e.target both works same
    this.style.background = `#${e.offsetX}`; //to change the color with event type

    console.log(e.offsetX);
    console.log(e.offsetY);

    console.log(val);
}