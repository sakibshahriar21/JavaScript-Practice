
//Asynchronous Programming // ekta code execute korar jonno next code wait korbe na 
// AJAX = Asynchronous JavaScript And XML
// AJAX helps to get data without loading the page

document.getElementById('get_data').addEventListener('click',loadData);

function loadData() {
    //console.log("Button Clicked");
    // Create XHR Object (XML HTTP Request)
    let xhr = new XMLHttpRequest(); //built in class for AJAX
    //Open function(it will access the file and get the information)

    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function (){ //when website takes much time for processing, we can use this function to implement loader/spinner
        console.log(xhr.readyState);
    }

    xhr.onload = function(){
        // HTTP statuses
        // 200: "OK" 
        // 403: "Forbidden" [File not accessible]
        // 404: "Not Found"
        if(this.status === 200){
            ///console.log(this.status);
            //console.log(this.responseText); //get the data from external   
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>` 
        }
    }

    //older technique 
    /*xhr.onreadystatechange = function (){

        // readyState values
        // 0: request not initialized
        // 1: server connection established
        // 2: request received 
        // 3: processing request
        // 4: request finished and respnse is ready 
        
        ///console.log(this.readyState);
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
        }
    }*/

    xhr.send();

    //console.log(xhr);
}