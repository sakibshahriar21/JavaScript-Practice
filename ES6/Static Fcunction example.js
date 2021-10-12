class Person { //parent class / base class
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    greeting(){
        return `Hello ${this.fname} ${this.lname}!`;
    }

    static test() { //we can not call static functions from object but class!
        console.log("I am static function");
    }
}

let person_1 = new Person("Md. Sakib","Shahriar");
console.log(person_1.greeting());
console.log(Person.test());

