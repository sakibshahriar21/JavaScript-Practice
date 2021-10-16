
document.querySelector("#name").addEventListener("focus", form_test);

document.querySelector("#name").addEventListener('keyup', from_test2);

function form_test(e){
    //console.log("Focused!");
    this.style.background = "pink"
}

function from_test2(e){
    //console.log(this.value);
    document.getElementById("demo").innerText = this.value; //print the input value to the page
}
