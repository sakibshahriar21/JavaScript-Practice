class Person {
    constructor(fname, lname, birthday){
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    calculateAge() {
        let birthday = new Date(this.dob);
        let age = Date.now() - birthday.getTime();
        let ageDate = new Date(age);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullName() {
        console.log(this.firstname, this.lastname);
    }
}

let person_1 = new Person("Md. Sakib","Shahriar","07-23-1997");
let person_2 = new Person("Maruf","Ahmed","01-05-1996");
let person_3 = new Person("Arthur","Morgan","08-06-1992");

console.log(person_1);
console.log("Full Name: " + person_1.fullName())
console.log("Age: " + person_1.calculateAge());

console.log(person_2);
console.log("Full Name: " + person_2.fullName())
console.log("Age: " + person_2.calculateAge())

console.log(person_3);
console.log("Full Name: " + person_3.fullName())
console.log("Age: " + person_3.calculateAge());