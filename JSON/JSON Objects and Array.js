 // working with external json file data

var xmlhttp = new XMLHttpRequest(); //this whole code can bring json data form an external json file//server (AJAX Code)
xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        //getObject(this.responseText);
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "JSON/data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
    //console.log(json_obj); //JSON String 
    var js_obj = JSON.parse(json_obj); //converting JSON String to js object
    //console.log(js_obj);

    for(x in js_obj.persons) {
        //console.log(x);
        var persons = js_obj.persons;
        //console.log(persons[x]); //by using this we can iterate objects and print elements
        for(y in persons[x]) {
           //console.log(y);// it will print property of objects
           console.log(persons[x][y]); // it will print the value of objects
        }
    }
}
