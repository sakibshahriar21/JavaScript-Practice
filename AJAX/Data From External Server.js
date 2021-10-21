// http://www.icndb.com/api/
// API (Language Independent)
// RESTful API -> helps to get the data from external source

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes (e) {

    let number = document.getElementById('numberJokes').value;
    //console.log(number);

    let xhr = new XMLHttpRequest();

    //xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
    //getting multiple jokes
    //xhr.open('GET', 'http://api.icndb.com/jokes/random/3', true);
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading.....</h3>"; //added loading functionality
    }


    xhr.onload = function () {
        if(this.status === 200){
            //console.log(this.responseText); //output will be in JSON String
            let data = JSON.parse(this.responseText); // converting into JS Object
            //console.log(data); // print the objects
            let jokes = data.value;
            let output = "<ol>";

            jokes.forEach(function(item) {
                console.log(item.joke); //extracting jokes data
                output += `<li>${item.joke}</li>`;
            });

            output += "</ol>";

            document.getElementById('output').innerHTML = output; //showing the jokes in html file
            //console.log(jokes);
        }
    }

    xhr.send();
}