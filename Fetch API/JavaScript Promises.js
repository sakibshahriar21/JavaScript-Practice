//Promises is an alternative version of callback function
//Promises is more smarter than  callback
//uses .than

let persons = [
    {firstName: "Md. Sakib", lastName: "Shahriar"},
    {firstName: "Imtiaz", lastName: "Khaleed"} //in Asynchronous this object will add in 2sec
];

function createPerson(person) {
    let prom = new Promise(function (resolve, reject){ //storing promise in prom
        persons.push(person);
        
        let error = false; // creating fake error for test

        if(!error){
            resolve(); //this function will keep promise about push person object
        }
        else {
            reject(`Error!: Something Wrong!`);
        }
         
    }); 
    return prom;
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

createPerson({firstName: "Akib", lastName: "Hasan"}).then(getPerson).catch(function(error){
    console.log(error); //this will print the messege in reject()
});