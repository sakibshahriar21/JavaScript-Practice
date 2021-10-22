//Fetch API
//Fetch API uses JavaScript Promise

//console.log(window);

document.getElementById("get_data").addEventListener('click', getData);

//xhr.open('GET', 'http://api.icndb.com/jokes/random', true);

/*fetch API called, .then function called and return 
a json data after that .then function called and prints data*/

//without Arrow Function

/*function getData() {
    //console.log("Clicked");
    //calling fetch api, fetch() returns a promise
    fetch('http://api.icndb.com/jokes/random').then(function(res){ 
        //console.log(res.text()); //prints text data
       // console.log(res.json()); //prints json data
       return res.json();

    }).then(function(data){
        console.log(data);

    }).catch(function(error){
        console.log(error);
    });
}*/

//with arrow function

function getData() {
    //console.log("Clicked");
    //calling fetch api, fetch() returns a promise
    fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => {console.log(data);})
    .catch(error => {console.log(error);})
}