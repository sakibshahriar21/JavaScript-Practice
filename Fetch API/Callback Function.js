// Callback Function
//Convert synchronous process to asynchronous

/*setTimeout(function (){
    console.log("Hello World!");
},1000); //this parameter will take time in ms */

//synchronous

/*let persons = [
    {firstName: "Md. Sakib", lastName: "Shahriar"},
    {firstName: "Imtiaz", lastName: "Khaleed"} //array object
];

function createPerson(person) {
    setTimeout(function(){
        persons.push(person);
    }, 4000);
};

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output;
    }, 1000);
}*/

//Asynchronous

let persons = [
    {firstName: "Md. Sakib", lastName: "Shahriar"},
    {firstName: "Imtiaz", lastName: "Khaleed"} //in Asynchronous this object will add in 2sec
];

function createPerson(person, callback_getPerson) {
    setTimeout(function(){
        persons.push(person); 
        callback_getPerson(); //this will Convert synchronous process to asynchronous , then getPerson() will be called
    }, 2000);
};

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output;
    }, 500);
}

createPerson({firstName: "Akib", lastName: "Hasan"}, getPerson);
//getPerson();